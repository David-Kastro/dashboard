import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const [open, setOpen] = React.useState(false);
  const [editValues, setEditValues] = React.useState([]);
  const [actionType, setActionType] = React.useState("edit");
  const classes = useStyles();
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    handleEdit,
    handleCreate
  } = props;
  const getBoolResult = bool =>
    bool ? (
      <span className={classes.booleanTrue}>Sim</span>
    ) : (
      <span className={classes.booleanFalse}>Não</span>
    );

  const handleClickOpen = (data, type) => {
    setEditValues(data);
    setActionType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.tableResponsive}>
      {handleCreate ? (
        <Button onClick={() => handleClickOpen([], "create")} color="info">
          <Add />
          Novo Registro
        </Button>
      ) : null}
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
              {handleEdit ? (
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Ações
                </TableCell>
              ) : null}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {typeof prop === "boolean" ? getBoolResult(prop) : prop}
                    </TableCell>
                  );
                })}
                {handleEdit ? (
                  <TableCell className={classes.tableCell}>
                    <Tooltip
                      id="tooltip-top"
                      title="Editar registro"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <IconButton
                        aria-label="Edit"
                        className={classes.tableActionButton}
                        onClick={() => handleClickOpen(prop, "edit")}
                      >
                        <Edit
                          className={
                            classes.tableActionButtonIcon + " " + classes.edit
                          }
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top-start"
                      title="Excluir registro"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <IconButton
                        aria-label="Delete"
                        className={classes.tableActionButton}
                      >
                        <Delete
                          className={
                            classes.tableActionButtonIcon + " " + classes.close
                          }
                        />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                ) : null}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {actionType === "edit" ? "Alteração de registro" : "Novo Registro"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Altere os dados abaixo dep
          </DialogContentText> */}
          <GridContainer>
            {tableHead.map((prop, key) =>
              typeof tableData[0][key] === "boolean" ? (
                <GridItem key={prop + key} xs={12} sm={12} md={12}>
                  <FormControlLabel
                    control={<Switch checked={editValues[key]} value="sim" />}
                    label={prop}
                  />
                </GridItem>
              ) : (
                <GridItem key={prop + key} xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText={prop}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: editValues[key]
                    }}
                  />
                </GridItem>
              )
            )}
          </GridContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} simple color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Alterar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string)
};
