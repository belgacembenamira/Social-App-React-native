/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 19/01/2024 - 18:54:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/01/2024
    * - Author          : belgacem
    * - Modification    : 
**/
// Importation des bibliothèques et composants nécessaires depuis React et d'autres modules.
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import FlashMessage from "react-native-flash-message";
import { MenuProvider } from 'react-native-popup-menu';

// Importation des reducers (fonctions qui spécifient comment l'état de l'application change en réponse à une action).
import authReducer from './store/reducers/auth';
import postsReducer from './store/reducers/posts';
import usersReducer from './store/reducers/users';
import chatReducer from './store/reducers/chat';

// Importation du composant de navigation principal de l'application.
import AppNavigator from './navigation/AppNavigator';

// Combinaison des reducers en un seul reducer racine.
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
  chat: chatReducer
});

// Création du store Redux en utilisant le reducer racine et l'application du middleware ReduxThunk.
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
  // composeWithDevTools()  // Ligne en commentaire, cette ligne pourrait être utilisée pour intégrer Redux DevTools Extension
);

// Composant principal de l'application.
export default function App() {
  return (
    // Utilisation du composant Provider pour envelopper l'application et fournir le store Redux à l'ensemble de l'application.
    <Provider store={store}>
      {/* Utilisation du composant MenuProvider pour gérer les menus contextuels dans l'application. */}
      <MenuProvider>
        {/* Utilisation du composant AppNavigator pour gérer la navigation dans l'application. */}
        <AppNavigator />
      </MenuProvider>
      {/* Utilisation du composant FlashMessage pour afficher des messages flash dans l'application. */}
      <FlashMessage position="top" />
    </Provider>
  );
}
