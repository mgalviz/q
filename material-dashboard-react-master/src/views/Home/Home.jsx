import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    email: '',
    name: '',
    lastName: '',
    petName: '',
    age: '',
  };

  handleChangeEmail = (event) => {
    const email = event.target.value;
    this.setState({ email });      
}

handleChangeName = (event) => {     
  const name = event.target.value;    
  this.setState({ name });
}

handleChangeLastName = (event) => {     
  const lastName = event.target.value;    
  this.setState({ lastName });
}

handleChangePetName = (event) => {     
  const petName = event.target.value;    
  this.setState({ petName });
}

handleChangeAge = (event) => {     
  const age = event.target.value;    
  this.setState({ age });
}

handleSubmit = () => {
    // your submit logic
}
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    const { email } = this.state;
      const { name } = this.state;
      const { lastName } = this.state;
      const { petName } = this.state;
      const { age } = this.state;

        const styles = {
          cardCategoryWhite: {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
          },
          cardTitleWhite: {
            color: "#FFFFFF",
            marginTop: "0px",
            minHeight: "auto",
            fontWeight: "300",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            marginBottom: "3px",
            textDecoration: "none"
          }
        };
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
          <Card>
                <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src="http://canali.kataweb.it/UserFiles/kataweb-consumi/Image/caneosso490.jpg"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Peluquería</h4>
                <p>
                  Texto acá
                </p>
              
              </CardBody>
            </Card>
        
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
          <Card>
                <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src="http://canali.kataweb.it/UserFiles/kataweb-consumi/Image/caneosso490.jpg"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Veterinario</h4>
                <p>
                  Texto acá
                </p>
              
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
          <Card>
                <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src="http://canali.kataweb.it/UserFiles/kataweb-consumi/Image/caneosso490.jpg"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Hospedaje</h4>
                <p>
                  Texto acá
                </p>
              
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
          <Card>
                <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src="http://canali.kataweb.it/UserFiles/kataweb-consumi/Image/caneosso490.jpg"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Productos Varios</h4>
                <p>
                  Texto acá
                </p>
              
              </CardBody>
            </Card>
          </GridItem>
   
        </GridContainer>
        <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}               
            >
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Card>
                      <CardHeader color="success">
                        <h4 className={styles.cardTitleWhite}>Registrar Mascota</h4>              
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={5}>                           
                          <TextValidator
                            label="Nombre"
                            onChange={this.handleChangeName}
                            formControlProps={{
                              fullWidth: true
                            }}                          
                            name="name"
                            value={name}
                            validators={['required']}
                            errorMessages={['Este campo es requerido']}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <TextValidator    
                            label="Apellido"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChangeLastName}                                                                
                            validators={['required']}
                            errorMessages={['Este campo es requerido']}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <TextValidator
                              label="Email"                              
                              onChange={this.handleChangeEmail}
                              name="email"
                              value={email}
                              validators={['required', 'isEmail']}
                              errorMessages={['Este campo es requerido', 'El email no es válido']}
                          />
                          </GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={5}>
                            <TextValidator
                                label="Nombre de la Mascota"
                                onChange={this.handleChangePetName}
                                style={{ marginTop: "25px" }}
                                name="petName"
                                value={petName}                              
                                validators={['required', 'matchRegexp:^[A-Za-z]*$']}
                                errorMessages={['Este campo es requerido', 'Solo cadenas de texto']}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <TextValidator
                                label="Edad de la Mascota"
                                onChange={this.handleChangeAge}
                                style={{ marginTop: "25px" }}
                                name="age"
                                value={age}                              
                                validators={['minNumber:0', 'maxNumber:20', 'matchRegexp:^[0-9]*$','required']}
                                errorMessages={['Solo se permiten números positivos','Hasta 20 años','Este campo es requerido']}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <TextValidator
                              label="Raza"                                                     
                              style={{ marginTop: "25px" }}
                              name="raza"                           
                           
                          />
                          </GridItem>
                        </GridContainer>                     
                 
                      </CardBody>
                      <CardFooter>
                        <Button type="submit" color="primary">Guardar</Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  
                </GridContainer>                
              </div>                
            </ValidatorForm>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
              <h4 className={styles.cardTitleWhite}>Cancelar reservación</h4>    
              </CardHeader>
              <CardBody>
              <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}               
            >
              <TextValidator
                    label="N° reservacion"
                   
                    style={{ marginTop: "25px" }}
                    name="reservation"
    
                />   
                </ValidatorForm>
              </CardBody>
              <CardFooter>
                  <Button type="submit" color="primary">Procesar</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>        
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Seguimiento de Mascotas</h4>
                <p className={classes.cardCategoryWhite}>
                  Casos atendidos
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={["ID", "Nombre", "Raza", "Estatus"]}
                  tableData={[
                    ["1", "Blanca", "Poodle", "Recuperación"],
                    ["2", "Pantera", "Labrador", "Por operar"],
                    ["3", "Luna", "Mestizo", "Consulta"],
                    ["4", "Arky", "Golden", "Recuperación"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <Card>
                <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src="http://canali.kataweb.it/UserFiles/kataweb-consumi/Image/caneosso490.jpg"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Mascota del dia</h4>
                <p>
                  Hola, soy balto y estas viendo disney channel
                </p>
              
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
