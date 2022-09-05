import { Outlet } from "react-router-dom";

import { DefaultContainer } from "./styles";

export function DefaultLayout() {
  return (
    <DefaultContainer>
      <Outlet />
    </DefaultContainer>
  )
}