import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Suspense} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app">
                <HeaderContainer/>
                <main className="main">
                    <div className="container">
                        <div className="main__inner">
                            <aside className="aside">
                                <Navbar/>
                            </aside>
                            <div className="main-content">
                                <Routes>

                                    <Route path="/profile" element={
                                        <Suspense fallback={<div><Preloader/></div>}>
                                            <ProfileContainer isMain={true}/>
                                        </Suspense>
                                    }/>
                                    <Route path="/profile/:userId" element={
                                        <Suspense fallback={<div><Preloader/></div>}>
                                            <ProfileContainer/>
                                        </Suspense>
                                    }/>


                                    <Route path="/dialogs/*"
                                           element={
                                               <Suspense fallback={<div><Preloader/></div>}>
                                                   <DialogsContainer/>
                                               </Suspense>
                                           }/>
                                    <Route path="/users" element={<UsersContainer/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp})(App)
)
let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp