import React, { useState } from 'react'
import { styled } from 'styled-components'

import { PADDING, TRACK_HEIGHT } from '../../constants'
import { useStorageContext } from '../context/StorageContext'
import { useStateContext } from '../context/StateContext'
import { useMenuContext } from '../context/MenuContext'
import { useTracksContext } from '../context/TracksContext'
import { defaultMenuStyle } from './menuStyle'
import { ask, int } from '../../utils'

const S = {
  Wrapper: styled.div`
    ${defaultMenuStyle}

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    > p {
      color: white;
      margin-top: ${PADDING * 2}px;
    }
  `,
  InnerWrapper: styled.div`
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${TRACK_HEIGHT / 2}px;
    width: 100%;

    > p {
      color: white;
      margin-top: ${PADDING * 2}px;
    }

    > div {
      display: flex;
      gap: ${PADDING}px;
    }
  `,
  ProjectSelect: styled.select`
    padding: ${PADDING}px ${PADDING * 2}px;
    margin-top: ${PADDING * 2}px;
    background-color: lightgray;
    font-size: 1.5rem;
    user-select: none;
    outline: none;
    border: 0;

    &:focus {
      background-color: white;
    }
  `,
  Button: styled.button`
    font-size: 1.5rem;
    padding: ${PADDING * 2}px;
    margin-top: ${PADDING * 2}px;
  `,
}

const SettingsMenu = ({ ...props }) => {
  const { storage } = useStorageContext()
  const { currentProject, setCurrentProject, resetStateContext } =
    useStateContext()
  const { resetMenuContext } = useMenuContext()
  const { resetTracksContext } = useTracksContext()

  const [selectedProject, setSelectedProject] = useState(false)

  const projectsKeys = Object.keys(storage?.projects || {})
  const newProjectIndex = int(projectsKeys.slice().pop()) + 1

  const divider = <>&nbsp;&nbsp;-&nbsp;&nbsp;</>

  const saveProject = () => {
    if (selectedProject === 'new') {
      setCurrentProject(newProjectIndex)
      setSelectedProject(false)
      electron.log(`saving new project ${newProjectIndex}`)
      return
    }

    // if ( int(currentProject) === int(selectedProject)) {
    if (isNaN(int(selectedProject))) {
      electron.log(`saving existing project ${currentProject}`)
      return
    }

    electron.log(`overwriting existing project ${selectedProject}`)
  }

  const createProject = () => {
    electron.log(`creating new project ${newProjectIndex}`)
    // set project
    setCurrentProject(newProjectIndex)
    setSelectedProject(false)
    // reset contexts
    resetStateContext()
    resetMenuContext()
    resetTracksContext()
  }

  const loadProject = () => {
    const projectIndex = int(selectedProject)
    const project = storage?.projects?.[projectIndex]
    electron.log(`loading project ${projectIndex}`)
    // set project
    setCurrentProject(projectIndex)
    setSelectedProject(false)
    // reset contexts
    resetStateContext(project?.state)
    resetMenuContext(project?.menu)
    resetTracksContext(project?.tracks)
  }

  return (
    <S.Wrapper {...props}>
      <p className="xl">SETTINGS</p>

      <S.InnerWrapper>
        <p className="lg">PROJECT</p>
        <p className="sm">
          <span>
            CURRENT: <b>{currentProject}</b>
          </span>

          {selectedProject ? (
            <span>
              {divider}SELECTED: <b>{selectedProject}</b>
            </span>
          ) : null}
        </p>

        <S.ProjectSelect
          onClick={() => null}
          onChange={({ target }) => setSelectedProject(target.value)}
        >
          {(projectsKeys || []).map((e, i) => (
            <option
              key={`${e}-${i}`}
              value={int(e)}
              selected={
                !isNaN(int(selectedProject))
                  ? i === int(selectedProject)
                  : i === int(currentProject)
              }
            >
              Project {e}
            </option>
          ))}
          <option value="new">Project {newProjectIndex} (new)</option>
        </S.ProjectSelect>

        <div>
          <S.Button onClick={() => ask('sure?', () => saveProject())}>
            <p>
              {isNaN(int(selectedProject)) ||
              int(currentProject) === int(selectedProject)
                ? 'Save'
                : 'Overwrite'}{' '}
              project
            </p>
          </S.Button>

          {selectedProject === 'new' ? (
            <S.Button onClick={() => ask('sure?', () => createProject())}>
              <p>Create project</p>
            </S.Button>
          ) : (
            <S.Button
              onClick={() => ask('sure?', () => loadProject())}
              disabled={
                isNaN(int(selectedProject)) ||
                int(currentProject) === int(selectedProject)
              }
            >
              <p>Load project</p>
            </S.Button>
          )}
        </div>
      </S.InnerWrapper>

      <S.InnerWrapper>
        <p className="lg">GLOBAL</p>

        <S.Button onClick={() => electron.reloadWindow()}>
          <p>Reload page</p>
        </S.Button>

        <S.Button onClick={() => confirm('sure?') && electron.rebootRpi()}>
          <p>Reboot Raspberry Pi</p>
        </S.Button>

        <S.Button onClick={() => confirm('sure?') && electron.shutdownRpi()}>
          <p>Shutdown Raspberry Pi</p>
        </S.Button>
        
        <S.Button onClick={() => confirm('sure?') && electron.clearStorage()}>
          <p>Clear storage</p>
        </S.Button>
      </S.InnerWrapper>
    </S.Wrapper>
  )
}

export default SettingsMenu
