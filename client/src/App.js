import React, { useEffect } from "react"
import axios from "axios"
import { Provider } from "react-redux";
import store from "./store";
import { CssBaseline } from "@material-ui/core";
import AppHome from "./components/AppHome";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { loadUser } from './store/actions/authAction'
import { loadBoards } from "./store/actions/boardsAction"
import { CLEAR_BOARDS } from "./store/actions/types"


export default function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])


  useEffect(() => {
    store.dispatch({ type: CLEAR_BOARDS })
    axios
      .get('/api/boards')
      .then(res =>
        res.data.map((d) => {
          const x = {
            [d._id]: {
              id: d._id,
              name: d.name,
              color: d.color,
              team: d.team,
              listsIds: d.listsIds
            }
          }
          store.dispatch(loadBoards(x[d._id]))
          return null
        })
      )
      .catch(err => {
        console.log(err)
      });
  }, [])


  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppHome />
        </ThemeProvider>
      </Provider>
    </>
  );
}
