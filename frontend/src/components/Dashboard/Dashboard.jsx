import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { theme } from "../../Defaults";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import Section from './Section';
import Loading from './Loading';
import ProfileMessage from './ProfileMessage';
import QRScanner from './QR/QR'



class Dashboard extends Component {
    state = {
        loading: "Loading your personal dashboard...",
        user: null,
        openDetails: false,
        profileMSG: null
    }
    componentWillMount() {
        this.props.profile.Get((msg, data) => {
            if (msg) {
                console.error(msg);
            } else {
                console.log(data);
                if (data) {
                    delete data.auth;
                    delete data.day_of;
                    this.setState({
                        user: data,
                        loading: false,
                        openDetails: (data.registration_status === "unregistered")
                    });
                }
            }
        });
    }
    submitUser = (user) => {
        this.setState({
            loading: 'Saving your information',
            profileMSG: null,
            user,
        }, () => {
            this.props.profile.Set(this.state.user, (err) => {
                this.setState({
                    loading: false,
                    profileMSG: err ?
                        { success: true, value: err } :
                        { success: false, value: 'Profile Updated!' }
                })
            });
        });
    }
    render() {
        // Authorized personal only!
        if (!this.props.profile.isLoggedIn) {
            return (<Redirect to="/login"/>);
        }
        if (this.state.loading) {
            return (<Loading text={this.state.loading} />)
        }
        let user = this.state.user;
        user.phone_number = user.phone_number || "";
        user.ethnicity = user.ethnicity || "";
        user.how_you_heard_about_hackru = user.how_you_heard_about_hackru || "";
        let mobile = this.props.isMobile;

        if (user.role.sponsor) {
            return (
                <Container fluid style={{ width: "100%", minHeight: "100vh", textAlign: "center", backgroundColor: theme.secondary[1] }} className="d-flex align-items-center">
                    <div style={{ zIndex: 3, color: "white", width: "100%" }} align="center">
                        <Container>
                            <div style={{ width: "100%", textAlign: "left", marginBottom: 0, paddingTop: 35 }}>
                                <Row>
                                    <Col md={9} xs={12}>
                                        <h1 className="display-4 theme-font">Welcome, {user.first_name}</h1>
                                        <div style={{ display: "inline-block", marginRight: 20 }}>
                                            <p className="lead">
                                                <Link to="/" className="theme-home-link" style={{ color: theme.primary[0] + "ff", textDecoration: "none" }}>
                                                    Home
                                                </Link>
                                            </p>
                                        </div>
                                        <div style={{ display: "inline-block", marginRight: 20 }}><p className="lead"><Link to="/logout" className="theme-home-link" style={{ color: theme.accent[0] + "ff", textDecoration: "none" }}>Logout</Link></p></div>
                                    </Col>
                                    <Col style={{ textAlign: "center" }} md={3} xs={12}>
                                        <img width="250"  style={{ marginTop: 0 }} alt="logo" src="./assets/icons/hru-logo-green.svg" />
                                    </Col>
                                </Row>
                            </div>
                           
                            <div style={{ width: "100%", textAlign: "left" }}>                              
                                <p className="lead">Sponsorship Portal</p>
                            </div>
                            <ProfileMessage message={this.state.profileMSG} />
                            
                            <Section title="QR Resume Lookup" subtitle="" isOpen={true} >
                                <QRScanner ></QRScanner>
                            </Section>
                        </Container>
                    </div>
                </Container>
            );
        } else {
            return (
                <Container fluid style={{ width: "100%", minHeight: "100vh", textAlign: "center", backgroundColor: theme.secondary[1] }} className="d-flex align-items-center">
                    <div style={{ zIndex: 3, color: "white", width: "100%" }} align="center">
                        <Container>
                            <div style={{ width: "100%", textAlign: "left", marginBottom: 0, paddingTop: 35 }}>
                               <h1>This account is not associated with a sponsor.  Please login at <a href="https://hackru.org/">hackru.org</a></h1>
                            </div>
                            <div style={{ display: "inline-block", marginRight: 20 }}><p className="lead"><Link to="/logout" className="theme-home-link" style={{ color: theme.accent[0] + "ff", textDecoration: "none" }}>Logout</Link></p></div>
                            
                            
                        </Container>
                    </div>
                </Container>
            )
        }
        
    }
}
export default Dashboard;