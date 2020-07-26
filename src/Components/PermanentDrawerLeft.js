import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NewDrawer from './NewDrawer';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import TodayIcon from '@material-ui/icons/Today';
import ListAltIcon from '@material-ui/icons/ListAlt';
import KitchenIcon from '@material-ui/icons/Kitchen';
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cookbooks from './Pages/Cookbooks';
import Pantry from './Pages/Pantry';
import GroceryList from './Pages/GroceryList';
import MealPlanner from './Pages/MealPlanner';
import Search from './Pages/Search';
import Settings from './Pages/Settings';
import Home from './Pages/Home';

const drawerWidth = 240;

// Vet this CSS, it is duplicated in NewDrawer.js.
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  // TODO: Fix font/style on the nav bar buttons.
  return (
    <div className={classes.root}>
      <Router>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' noWrap>
              <Switch>
                <Route path='/'>Home</Route>
                <Route path='/cookbooks'>Cookbooks</Route>
                <Route path='/search'>Search</Route>
                <Route path='/meal-planner'>Meal Planner</Route>
                <Route path='/grocery-list'>Grocery List</Route>
                <Route path='/pantry'>Pantry</Route>
                <Route path='/settings'>Settings</Route>
              </Switch>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor='left'
        >
          <div className={classes.toolbar} />
          <Divider />
          <Link to='/cookbooks'>
            <ListItem button key={'Cookbooks'}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={'Cookbooks'} />
            </ListItem>
          </Link>
          <Link to='/search'>
            <ListItem button key={'Search'}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary={'Search'} />
            </ListItem>
          </Link>
          <Link to='/meal-planner'>
            <ListItem button key={'Meal Planner'}>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary={'Meal Planner'} />
            </ListItem>
          </Link>
          <Link to='/grocery-list'>
            <ListItem button key={'Grocery List'}>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary={'Grocery List'} />
            </ListItem>
          </Link>
          <Link to='/pantry'>
            <ListItem button key={'Pantry'}>
              <ListItemIcon>
                <KitchenIcon />
              </ListItemIcon>
              <ListItemText primary={'Pantry'} />
            </ListItem>
          </Link>
          <Divider />
          <Link to='/settings'>
            <ListItem button key={'Settings'}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'Settings'} />
            </ListItem>
          </Link>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path='/cookbooks'>
              <Cookbooks />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/meal-planner'>
              <MealPlanner />
            </Route>
            <Route path='/grocery-list'>
              <GroceryList />
            </Route>
            <Route path='/pantry'>
              <Pantry />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
