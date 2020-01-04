import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Corretores</h4>
            <p className={classes.cardCategoryWhite}>
              Listagem dos corretores registrados no sistema.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              handleCreate={data => console.log(data)}
              handleEdit={data => console.log(data)}
              tableHeaderColor="gray"
              tableHead={[
                "Nome",
                "Telefone",
                "E-mail",
                "Possui Creci",
                "Possui Veículo"
              ]}
              tableData={[
                [
                  "Dakota Rice",
                  "(61) 99999-9999",
                  "teste@gmail.com",
                  true,
                  false
                ],
                [
                  "Minerva Hooper",
                  "(61) 99999-9999",
                  "teste@gmail.com",
                  false,
                  true
                ],
                [
                  "Sage Rodriguez",
                  "(61) 99999-9999",
                  "teste@gmail.com",
                  false,
                  false
                ],
                [
                  "Philip Chaney",
                  "(61) 99999-9999",
                  "teste@gmail.com",
                  true,
                  false
                ],
                [
                  "Doris Greene",
                  "(61) 99999-9999",
                  "teste@gmail.com",
                  false,
                  true
                ],
                [
                  "Mason Porter",
                  "(61) 99999-9999",
                  "teste@gmail.com",
                  true,
                  true
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
