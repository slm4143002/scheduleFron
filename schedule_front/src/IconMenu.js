import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function IconMenu() {
  let navigate = useNavigate();
  let [result, setResult] = useState(false);

  function onDismiss() {
    setResult(true);
  }

  useEffect(() => {
    if (result) {
      navigate("/viewResult");
    }
  }, [navigate, result]);

  return (
    <MenuList
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyItems: "space-around",
        gap: 10,
        width: 1000,
        top: 50,
        left: 450,
        textAlign: "center",
      }}
    >
      <MenuItem>
        <ListItemText>排班登录</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText onClick={onDismiss}>排班结果</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText>人员管理</ListItemText>
      </MenuItem>
    </MenuList>
  );
}
