import React, { Component } from "react"; // Default react imports for the component
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom"; // React router components
import { SponsorshipPage, E404, LoginPage, ForgotPage, MagicPage, DashboardPage, SignUpPage } from "./components/Pages"; // Router Pages
import MLHBadge from "./MLHBadge"; // We need this to qualify as an official MLH event
import { defaults } from "./Defaults"; // Get a handle to the default application settings
import { Profile } from "./components/Profile";

class App extends Component {
    /**
     * Bind all of the other method components, and set up the initial event handlers
     * @param {Object} props React JSON object that represents the props
     */
    constructor(props) {
        super(props);
        this._event_onResize = this._event_onResize.bind(this);
        this.getComponentProps = this.getComponentProps.bind(this);
        window.addEventListener("resize", this._event_onResize);
    }

    _event_onResize() {
        this.setState({
            isMobile: (window.innerWidth < defaults.mobileWidthThresholdRelaxed) ||
            (window.innerHeight < defaults.mobileHeightThresholdRelaxed)
        });
    }

    componentWillMount() {
        this._event_onResize();
        this.setState({
            profile: new Profile(),
            loggedout: false,
            magic: ""
        });
    }

    getComponentProps() {
        return {
            magic: this.state.magic,
            setMagic: this.state.setMagic,
            isMobile: this.state.isMobile,
            profile: this.state.profile,
            loggedout: this.state.loggedout,
            dismissAlert: this.dismissLoggedOutAlert
        };
    }

    render() {
        let componentProps = this.getComponentProps();
        return (
            <BrowserRouter style={{ width: "100%" }}>
                <div>
                    <MLHBadge />
                    <div style={{ position: "fixed", zIndex: 1, width: "100%", height: "100%", left: 0, top: 0, background: "url(/assets/hru-background-large.png)", backgroundSize: "cover", opacity: 0.25 }}></div>
                    <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "100%", left: 0, top: 0, backgroundColor: "rgb(0, 0, 0)", backgroundSize: "cover", opacity: 0.25 }}></div>
                    <Switch>
                        <Route exact path="/" render={(props) => <SponsorshipPage {...props} {...componentProps} />} />
                        <Route exact path="/login" render={(props) => <LoginPage {...props} {...componentProps} />} />
                        <Route exact path="/signup" render={(props) => <SignUpPage {...props} {...componentProps} />} />
                        <Route exact path="/forgot" render={(props) => <ForgotPage {...props} {...componentProps} />} />
                        <Route exact path="/magic/:mlurl" render={(props) => <MagicPage {...props} {...componentProps} />} />
                        <Route exact path="/dashboard" render={(props) => <DashboardPage {...props} {...componentProps} />} />
                        <Route exact path="/logout" component={() => { this.state.profile.Logout(); this.setState({ profile: this.state.profile, loggedout: true }); return (<Redirect to="/" />); }} />
                        <Route component={E404} />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
