/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { NavLink } from 'react-router-dom';
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <NavLink
                to={'dashboard'}
                className={classes.block}
              >
                Dashboard
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#config" className={classes.block}>
                Configurações
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#top" className={classes.block}>
                Ir ao topo
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#logout" className={classes.block}>
                Sair
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              target="_blank"
              className={classes.a}
            >
              Copyrights
            </a>
            , need to add it later.
          </span>
        </p>
      </div>
    </footer>
  );
}
