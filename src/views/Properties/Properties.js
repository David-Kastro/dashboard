import React from "react";
// @material-ui/core components
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import AddAlert from "@material-ui/icons/AddAlert";
import Announcement from "@material-ui/icons/Announcement";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

const PropertiesTable = () => (
  <Table
    handleCreate={data => console.log(data)}
    handleEdit={data => console.log(data)}
    tableHeaderColor="gray"
    tableHead={[
      "Código",
      "Descrição",
      "Tipo",
      "Alugado/Vendido",
      "Registrado em",
      "Alugado/Vendido em"
    ]}
    tableData={[
      [
        "DD03137",
        "A melhor localização para o seu negócio!",
        "Aluguel",
        true,
        "13/03/2019",
        "05/06/2019"
      ],
      [
        "DD03160",
        "Sala no Brasília Shopping com 4 vagas",
        "Venda",
        false,
        "11/03/2019",
        "05/06/2019"
      ],
      [
        "DD03165",
        "Sala no Brasília Shopping com 2 vagas",
        "Aluguel",
        false,
        "10/03/2019",
        "05/06/2019"
      ]
    ]}
  />
);

export default function TableList() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <CustomTabs
          title="Propriedades: "
          headerColor="primary"
          tabs={[
            {
              tabName: "Todas",
              tabContent: <PropertiesTable />,
              caption: "Listagem de todas as Propriedades"
            },
            {
              tabName: "Propriedades Ind./Aval.",
              tabIcon: Announcement,
              tabContent: <PropertiesTable />,
              caption: "Listagem das Propriedades Indicadas ou Avaliadas"
            },
            {
              tabName: "Propriedades Anunciadas",
              tabIcon: AddAlert,
              tabContent: <PropertiesTable />,
              caption: "Listagem das Propriedades Anunciadas"
            },
            {
              tabName: "Propriedades a venda",
              tabIcon: MonetizationOn,
              tabContent: <PropertiesTable />,
              caption: "Listagem das Propriedades a Venda"
            }
          ]}
        />
        {/* <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Corretores</h4>
            <p className={classes.cardCategoryWhite}>
              Listagem dos corretores registrados no sistema.
            </p>
          </CardHeader>
          <CardBody></CardBody>
        </Card> */}
      </GridItem>
    </GridContainer>
  );
}
