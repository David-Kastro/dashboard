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
            <h4 className={classes.cardTitleWhite}>Agendamentos</h4>
            <p className={classes.cardCategoryWhite}>
              Listagem dos agendamentos de visitas.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              handleCreate={data => console.log(data)}
              handleEdit={data => console.log(data)}
              tableHeaderColor="gray"
              tableHead={[
                "Data Agendamento",
                "Dia/Hora",
                "Propriedade",
                "Nome do Reservante",
                "Telefone",
                "E-mail",
                "Encaixe",
                "Horario de Encaixe"
              ]}
              tableData={[
                [
                  "11/03/2019",
                  "ás 12:30, Dom.",
                  "Ótima Kitnet/Studo em Samambaia",
                  "Bruno Ferreira",
                  "(61) 98288-6251",
                  "brunolsferreira993@gmail.com",
                  true,
                  "Das 08:00 ás 16:45"
                ],
                [
                  "11/03/2019",
                  "ás 12:30, Dom.",
                  "Ótima Kitnet/Studo em Samambaia",
                  "Bruno Ferreira",
                  "(61) 98288-6251",
                  "brunolsferreira993@gmail.com",
                  true,
                  "Das 08:00 ás 16:45"
                ],
                [
                  "11/03/2019",
                  "ás 12:30, Dom.",
                  "Ótima Kitnet/Studo em Samambaia",
                  "Bruno Ferreira",
                  "(61) 98288-6251",
                  "brunolsferreira993@gmail.com",
                  true,
                  "Das 08:00 ás 16:45"
                ],
                [
                  "11/03/2019",
                  "ás 12:30, Dom.",
                  "Ótima Kitnet/Studo em Samambaia",
                  "Bruno Ferreira",
                  "(61) 98288-6251",
                  "brunolsferreira993@gmail.com",
                  true,
                  "Das 08:00 ás 16:45"
                ],
                [
                  "11/03/2019",
                  "ás 12:30, Dom.",
                  "Ótima Kitnet/Studo em Samambaia",
                  "Bruno Ferreira",
                  "(61) 98288-6251",
                  "brunolsferreira993@gmail.com",
                  true,
                  "Das 08:00 ás 16:45"
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
