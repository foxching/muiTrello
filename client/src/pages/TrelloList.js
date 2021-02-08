import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import ListContainer from "../components/List/ListContainer";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { setActiveBoard } from "../store/actions/boardsAction";
import { getBoardListCards } from "../store/actions/listsAction";

export default function TrelloList(props) {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveBoard(boardId));
    dispatch(getBoardListCards(boardId));
  }, [dispatch, boardId]);

  return (
    <SimpleBar
      style={{
        overflowY: "auto",
        overflowX: "auto",
        minHeight: "93vh",
        maxHeight: 300
      }}
    >
      <ListContainer />
    </SimpleBar>
  );
}
