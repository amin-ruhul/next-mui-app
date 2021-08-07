import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Card from "../src/components/Card";
import ManageAccountsIcon from "@material-ui/icons/ManageAccounts";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";

function dashboard() {
  return (
    <>
      <Head>
        <title>UI Lib | Dashboard</title>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            text="New Leds"
            number="200"
            color="#663399"
            backGround="#F2F1FE"
          >
            <ManageAccountsIcon />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            text="Sales"
            number="$4021"
            color="#3981F7"
            backGround="#C5DBFF"
          >
            <BlurCircularIcon />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card text="Orders" number="80" color="#5DAE49" backGround="#BCDDB3">
            <AddShoppingCartIcon />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            text="Expense"
            number="$1200"
            color="#FFC620"
            backGround="#FFF6E0"
          >
            <LocalAtmIcon />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default dashboard;
