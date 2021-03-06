import React from "react"
import DatePicker from "react-datepicker"
import "./ParameterPanel.css"
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Spinner from 'react-bootstrap/Spinner'


class ParameterPanelView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "",
            endDate: "",
            device: "Devices",
            checked: [],
            button: true
        }
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.getData = this.getData.bind(this);
    }



    handleChangeEnd(newEndDate) {
        this.setState({ endDate: newEndDate })
    }

    handleChangeStart(newStartDate) {
        this.setState({ startDate: newStartDate })
    }

    handleCheck(e) {
        let value = e.target.value;
        let newArray = this.state.checked;
        if (this.state.checked.includes(value)) {
            newArray = newArray.filter(element => { return element !== value });
        }
        else {
            newArray.push(value);
        }
        this.setState({ checked: newArray });
    }
    getData(){
        //console.log('clicked',e)
        if(this.state.startDate == "" || this.state.endDate == "" || this.state.checked.length == 0){
            alert("Niepoprawne dane");
        }
        else {
            this.props.getData(this.state);
            this.setState({button: true});
        }
    }

    render() {
        return (
            <div>
                <div className="parameter-side">
                    <DatePicker
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        selected={this.state.startDate}
                        selectsStart
                        showTimeSelect
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                    />

                    <DatePicker
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        selected={this.state.endDate}
                        selectsEnd
                        showTimeSelect
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                    />
                        <div className="checkboxes" style={{marginTop: "5vh"}}>
                            <div className="form-check my-form-check">
                                <label className="form-check-label my-form-check-label">
                                    <input type="checkbox"
                                        style={{ color: "white", fontFamily: "Montserrat" }}
                                        onClick={this.handleCheck}
                                        className="form-check-input"
                                        key="CS7"
                                        value="1"
                                        name="1"
                                    />
                                    CS7
                                </label>
                            </div>
                            <div className="form-check my-form-check" >
                                <label className="form-check-label my-form-check-label">
                                    <input type="checkbox"
                                        onClick={this.handleCheck}
                                        className="form-check-input"
                                        key="FLOMID XT5/XT5H"
                                        value="2"
                                        name="2"

                                    />
                                    FLOMID XT5/XT5H
                                 </label>
                            </div>
                            <div className="form-check my-form-check">
                                <label className="form-check-label my-form-check-label">
                                    <input type="checkbox"
                                        onClick={this.handleCheck}
                                        className="form-check-input"
                                        key="ADZ-SML-10.0"
                                        value="3"
                                        name="3"
                                    />
                                    ADZ-SML-10.0
                                </label>
                            </div>
                            <div className="form-check my-form-check" >
                                <label className="form-check-label my-form-check-label">
                                    <input type="checkbox"
                                        onClick={this.handleCheck}
                                        className="form-check-input"
                                        key="AM2302"
                                        value="4"
                                        name="4"
                                    />
                                    AM2302
                                </label>
                            </div>
                        
                        <div>{this.props.loading ? <Spinner animation="border" role="status" className = "spinner" size="m" /> :
                            <Button type="button" id="load-serialized-data-button" 
                            onClick={() => this.getData()}
                                className="btn  btn-default"  style={{fontFamily: "Montserrat", backgroundColor: "#2DC5C9", color: "black", fontWeight: "bold", marginTop: "5vh" }}>
                                Pobierz
                            </Button>}
                        </div>
                        </div>
                </div>
            </div>
                )
          }
        }
        
        
export default  ParameterPanelView;