import json
import board
import busio
import RPi.GPIO as GPIO
from time import sleep
from redis import Redis
from adafruit_mcp230xx.mcp23017 import MCP23017
from digitalio import Direction, Pull

def main():
  redis = Redis(host='localhost', port=6379, db=0)

  interrupt_pin_a = 17
  interrupt_pin_b = 27

  # io_control
  # Bit 1 controls interrupt polarity (1 = active-high, 0 = active-low).
  # Bit 2 is whether irq pin is open drain (1 = open drain, 0 = push-pull).
  # Bit 3 is unused.
  # Bit 4 is whether SDA slew rate is enabled (1 = yes).
  # Bit 5 is if I2C address pointer auto-increments (1 = no).
  # Bit 6 is whether interrupt pins are internally connected (1 = yes).
  # Bit 7 is whether registers are all in one bank (1 = no)

  i2c = busio.I2C(board.SCL, board.SDA)
  mcps = [
    (MCP23017(i2c, address=0x20), {
      'interrupt_enable': 0b0101010111111111,
      'interrupt_configuration': 0b0000000000000000,
      'io_control': 0b1000101,
    }),
    (MCP23017(i2c, address=0x21), {
      'interrupt_enable': 0b0000000000000000,
      'io_control': 0b1000101,
    }),
    (MCP23017(i2c, address=0x22), {
      'interrupt_enable': 0b0101010111111111,
      'interrupt_configuration': 0b0000000000000000,
      'io_control': 0b1000101,
    }),
    (MCP23017(i2c, address=0x24), {
      'interrupt_enable': 0b0000000000000000,
      'io_control': 0b1000101,
    })
  ]

  pins = {}
  switches = {}
  switches_pressed = {}
  encoders = {}

  mcp_gpio_mapping = {
    # chip 0
    'switch_0': (0, 'A', 7, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA7
    'switch_1': (0, 'A', 6, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA6
    'switch_2': (0, 'A', 5, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA5
    'switch_3': (0, 'A', 4, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA4
    'switch_4': (0, 'A', 3, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA3
    'switch_5': (0, 'A', 2, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA2
    'switch_6': (0, 'A', 1, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA1
    'switch_7': (0, 'A', 0, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPA0
    'encoder_0_pin1': (0, 'B', 0, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB8
    'encoder_0_pin2': (0, 'B', 1, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB9
    'encoder_1_pin1': (0, 'B', 2, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB10
    'encoder_1_pin2': (0, 'B', 3, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB11
    'encoder_2_pin1': (0, 'B', 4, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB12
    'encoder_2_pin2': (0, 'B', 5, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB13
    'encoder_3_pin1': (0, 'B', 6, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB14
    'encoder_3_pin2': (0, 'B', 7, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 0, GPB15
    # chip 1
    'led_16': (1, 'A', 1, {'direction': Direction.OUTPUT}),  # chip 1, GPA1
    'led_17': (1, 'A', 0, {'direction': Direction.OUTPUT}),  # chip 1, GPA0
    'led_0': (1, 'B', 0, {'direction': Direction.OUTPUT}),  # chip 1, GPB0
    'led_2': (1, 'B', 2, {'direction': Direction.OUTPUT}),  # chip 1, GPB2
    'led_4': (1, 'B', 4, {'direction': Direction.OUTPUT}),  # chip 1, GPB4
    'led_6': (1, 'B', 6, {'direction': Direction.OUTPUT}),  # chip 1, GPB6
    # chip 2
    'switch_8': (2, 'A', 7, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA7
    'switch_9': (2, 'A', 6, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA6
    'switch_10': (2, 'A', 5, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA5
    'switch_11': (2, 'A', 4, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA4
    'switch_12': (2, 'A', 3, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA3
    'switch_13': (2, 'A', 2, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA2
    'switch_14': (2, 'A', 1, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA1
    'switch_15': (2, 'A', 0, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPA0
    'encoder_4_pin1': (2, 'B', 0, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB8
    'encoder_4_pin2': (2, 'B', 1, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB9
    'encoder_5_pin1': (2, 'B', 2, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB10
    'encoder_5_pin2': (2, 'B', 3, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB11
    'encoder_6_pin1': (2, 'B', 4, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB12
    'encoder_6_pin2': (2, 'B', 5, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB13
    'encoder_7_pin1': (2, 'B', 6, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB14
    'encoder_7_pin2': (2, 'B', 7, {'direction': Direction.INPUT, 'pull': Pull.UP}),  # chip 2, GPB15
    # chip 3
    'led_8': (3, 'B', 0, {'direction': Direction.OUTPUT}),  # chip 3, GPB0
    'led_10': (3, 'B', 2, {'direction': Direction.OUTPUT}),  # chip 3, GPB2
    'led_12': (3, 'B', 4, {'direction': Direction.OUTPUT}),  # chip 3, GPB4
    'led_14': (3, 'B', 6, {'direction': Direction.OUTPUT}),  # chip 3, GPB6
  }

  for (mcp, config) in mcps:
    for key, value in config.items():
      if key == 'interrupt_enable':
        mcp.interrupt_enable = value
      if key == 'io_control':
        mcp.io_control = value
      if key == 'default_value':
        mcp.default_value = value
      if key == 'interrupt_configuration':
        mcp.interrupt_configuration = value

  for name, (mcp_index, port, pin_num, config) in mcp_gpio_mapping.items():
    if mcp_index >= len(mcps): break

    chip = mcps[mcp_index][0]
    pin = chip.get_pin(pin_num if port == 'A' else 8 + pin_num)
    
    for key, value in config.items():
      if key == 'direction':
        pin.direction = value
      if key == 'pull':
        pin.pull = value

    pins[name] = pin
    chip.clear_ints()

  def set_state_changed(status=1):
    return redis.set('state_changed', status)

  def set_initial_state():
    set_state_changed(0)
    get_gpio_mapping_keys = lambda x: filter(lambda y: x in y, mcp_gpio_mapping.keys())

    for switch_name in get_gpio_mapping_keys('switch'):
      switches[switch_name] = 0
      switches_pressed[f"{switch_name}_pressed"] = 1
      redis.set(switch_name, switches[switch_name])
      redis.set(f"{switch_name}_pressed", switches_pressed[f"{switch_name}_pressed"])
    
    for encoder_name in list(set([x.split('_pin')[0] for x in get_gpio_mapping_keys('encoder')])):
      encoders[encoder_name] = 0
      redis.set(encoder_name, encoders[encoder_name])
      redis.set(f"{encoder_name}_relative", encoders[encoder_name])

    redis.set('gpio_keys', json.dumps([
      *switches,
      *switches_pressed,
      *encoders,
      *[f"{x}_relative" for x in encoders],
    ]))

  def get_xor_encoder_value(a, b):
    return (a ^ b) and 1 or -1

  # handle switch interrupts
  def interrupt_callback_a(port=0):
    interrupts = []

    for i, (mcp, config) in enumerate(mcps):
      int_flaga = mcp.int_flaga
      if config['interrupt_enable'] > 0 and len(int_flaga):
        int_cap = mcp.int_capa
        int_flag = int_flaga[0]
        int_val = int_cap[int_flag]
        interrupts.append((i, int_cap, int_flag, int_val))

        for x in list(range(0, 8)):
          switch_name = f"switch_{x + (8 * int(i * (1 / 2)))}"
          switches_pressed[f"{switch_name}_pressed"] = int(pins[switch_name].value)
          redis.set(f"{switch_name}_pressed", switches_pressed[f"{switch_name}_pressed"])

    for (i, int_cap, int_flag, int_val) in interrupts:
      if int_val == 0:
        switch_name = f"switch_{7 - int_flag + (i * 4)}"
        switches[switch_name] = 0 if switches[switch_name] == 1 else 1
        print(switch_name)
        redis.set(switch_name, switches[switch_name])

    if len(interrupts):
      set_state_changed()

  # handle encoder interrupts
  def interrupt_callback_b(port=0):
    interrupts = []

    for i, (mcp, config) in enumerate(mcps):
      int_flagb = mcp.int_flagb
      if config['interrupt_enable'] > 0 and len(int_flagb):
        int_cap = mcp.int_capb
        int_flag = int_flagb[0]
        interrupts.append((i, int_cap, int_flag))

    for (i, int_cap, int_flag) in interrupts:
      encoder_name = f"encoder_{int((int_flag - 8) / 2 + i * 2)}"
      encoder_value = get_xor_encoder_value(*int_cap[int_flag - 8 : int_flag - 6])
      encoders[encoder_name] += encoder_value
      redis.incrby(encoder_name, encoder_value)
      redis.set(f"{encoder_name}_relative", encoder_value)

    if len(interrupts):
      set_state_changed()

  def dim_leds():
    for key, pin in pins.items():
      if 'led' in key:
        pin.value = 0

  def cleanup():
    dim_leds()
    GPIO.cleanup()

  try:
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(interrupt_pin_a, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    GPIO.setup(interrupt_pin_b, GPIO.IN, pull_up_down=GPIO.PUD_UP)

    GPIO.add_event_detect(interrupt_pin_a, edge=GPIO.FALLING, bouncetime=5)
    GPIO.add_event_callback(interrupt_pin_a, callback=interrupt_callback_a)

    GPIO.add_event_detect(interrupt_pin_b, edge=GPIO.FALLING)
    GPIO.add_event_callback(interrupt_pin_b, callback=interrupt_callback_b)

    set_initial_state()
    print('listening')

    while True:
      if redis.get('cleanup') is not None:
        redis.delete('cleanup')
        cleanup()
        exit(0)

      led_values = redis.get('led_values')
      if led_values is not None:
        new_led_values = [int(x) for x in str(led_values.decode('utf-8'))]
        for i, value in enumerate(new_led_values):
          led_name = f"led_{i * 2}"
          if led_name in pins:
            pins[led_name].value = value
      else:
        dim_leds()

      if int(redis.get('state_changed')):
        set_state_changed(0)

      if GPIO.input(interrupt_pin_a) + GPIO.input(interrupt_pin_b) == 0:
        for (mcp, _) in mcps:
          mcp.clear_ints()

      sleep(1 / 10)

  except KeyboardInterrupt:
    cleanup()
  finally:
    cleanup()

if __name__ == '__main__':
  main()
