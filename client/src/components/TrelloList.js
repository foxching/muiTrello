import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux"
import ListContainer from "../components/List/ListContainer";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { setActiveBoard } from "../store/actions/boardsAction"
import { loadLists } from "../store/actions/listsAction"

export default function TrelloList(props) {
  const boardId = props.match.params.boardId
  const dispatch = useDispatch()

  

  useEffect(() => {

    async function fetchData() {
      dispatch(setActiveBoard(boardId))
      const res = await axios.get(`/api/lists/${boardId}`)
      await res.data.map((d) => {
        const x = {
          [d._id]: {
            id: d._id,
            title: d.title,
            cards: d.cards,
            board: d.board,
          }
        }
        dispatch(loadLists(x[d._id]))
      })
    }
    fetchData();
  }, [])

  return (
    <>
      <SimpleBar
        style={{
          overflowY: "auto",
          overflowX: "auto",
          minHeight: "93vh",
          maxHeight: 300
        }}
      >
        <ListContainer boardId={props.match.params.boardId} />
      </SimpleBar>
    </>
  );
}
