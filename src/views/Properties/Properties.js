import React, { useEffect, useState, useMemo } from "react";
// @material-ui/core components
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import AddAlert from "@material-ui/icons/AddAlert";
import Announcement from "@material-ui/icons/Announcement";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import { properties } from "services/properties-service";

function PropertiesTable ({ api }) {
  const [properties, setProperties] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [tableProps] = useState({
    codigoImovel: "Código",
    descricaoCurta: "Descrição",
    tipoImovel: "Tipo",
    tipo: "Status",
    cadastradoEm: "Registrado em",
    alugadoEm: "Alugado em",
    vendidoEm: "Vendido em"
  })

  const tableHead = useMemo(() => {
    const data = Object.values(tableProps);
    return data;
  }, [])

  const tableData = useMemo(() => {

    const data = properties.map( prop => {
      const dataKeys = Object.keys(tableProps);
      return dataKeys.map( key => {
        if( ['cadastradoEm', 'alugadoEm', 'vendidoEm'].includes(key) ) {
          return IsoDateParse(prop[key])
        }
        return prop[key]
      });
    })
    return data;

  }, [properties])

  useEffect( () => {
    fetchData();
  }, [])

  function IsoDateParse(isoDate) {
    const date     = new Date(isoDate);
    const day      = date.getDate();
    const monthNum = (date.getMonth() + 1);
    const month    = monthNum < 10 ? ('0' + monthNum) : monthNum;
    const year     = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  async function fetchData () {
    setLoading(true);
    const res = await api();
    setProperties(res.data.data);
    setTotal(res.data.total);
    setPage(res.data.page);
    setLastPage(res.data.lastPage);
    setLoading(false);
  }

  return (
    <Table
      handleCreate={data => console.log(data)}
      handleEdit={data => console.log(data)}
      tableHeaderColor="gray"
      tableHead={tableHead}
      tableData={tableData}
      loading={loading}
    />
  )
}

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
              tabContent: <PropertiesTable api={properties} />,
              caption: "Listagem de todas as Propriedades"
            },
            {
              tabName: "Propriedades Ind./Aval.",
              tabIcon: Announcement,
              tabContent: <PropertiesTable api={properties} />,
              caption: "Listagem das Propriedades Indicadas ou Avaliadas"
            },
            {
              tabName: "Propriedades Anunciadas",
              tabIcon: AddAlert,
              tabContent: <PropertiesTable api={properties} />,
              caption: "Listagem das Propriedades Anunciadas"
            },
            {
              tabName: "Propriedades a venda",
              tabIcon: MonetizationOn,
              tabContent: <PropertiesTable api={properties} />,
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
