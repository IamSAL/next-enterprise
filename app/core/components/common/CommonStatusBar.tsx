import { StatusBarItem } from "@components"

import React, { Fragment, useEffect } from "react"
import { IAppContext, useAppContext } from "app/core/components/app-window/appContext"
import AppMenu from "./menus/AppMenu"
import EditMenu from "./menus/EditMenu"
import FileMenu from "./menus/FileMenu"
import HelpMenu from "./menus/HelpMenu"
import ViewMenu from "./menus/ViewMenu"
import WindowMenu from "./menus/WindowMenu"

const CommonStatusBar = () => {
  return (
    <Fragment>
      <AppMenu />
      <FileMenu />
      <EditMenu />
      <ViewMenu />
      <WindowMenu />
      <HelpMenu />
    </Fragment>
  )
}

export default CommonStatusBar
