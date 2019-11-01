import React, { Fragment, Component } from 'react';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import Router from 'next/router';
import HomeBtn from '../../components/HomeBtn';
import BrandWhite from '../../components/BrandWhite';
import TypeFormBtn from '../TypeFormBtn';
import Spinner from '../Spinner';

let JsPDF = null;
if (typeof window !== "undefined") {
  import("jspdf").then((module) => {
    JsPDF = module.default;
  });
}

const backHome = () => {
  Router.push("/");
};

class PrintNSavePopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    if (this.props.function === "save") {
      this.generatePdf();
    }
  }

  getDateFormated = () => {
    const dateToFormat = new Date();
    const day = dateToFormat.getDate();
    const monthIndex = dateToFormat.getMonth();
    const year = dateToFormat.getFullYear();
    return `${day}/${monthIndex}/${year}`;
  }

  getSaveTitle = (formatedDate) => {
    return `${this.props.patient ? `${this.props.patient}-` : ""}${formatedDate}-VizzMD.pdf`;
  }

  createPdf = (imgData) => {
    const pdf = new JsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0, 200, 298);
    return pdf;
  }

  generatePdf = () => {
    if (process.browser) {
      this.setState({ ...this.state, loading: true });
      if (typeof window !== "undefined") {
        import("html2canvas").then((module) => {
          module.default(document.getElementById('printComponent')).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = this.createPdf(imgData);
            const formatedDate = this.getDateFormated();
            const saveTitle = this.getSaveTitle(formatedDate);
            pdf.save(saveTitle);
            this.setState({ ...this.state, loading: false });
          });
        });
      }
    }
  }

  render() {
    let spinner = "";
    if (this.state.loading) {
      spinner = <Spinner />;
    }
    return (
      <div id="not-to-be-printed">
        <Popup
          modal
          position="right center"
          open
          onClose={backHome}
        >
          <Fragment>
            <div className="gradient-square">
              <h5 className="gradient-square-text">Thanks for using</h5>
              <BrandWhite />
            </div>
            {spinner}
            <h2 className="print-pop-up-text" >{this.state.loading ? this.props.gradientText : "Here it is"}</h2>
            <div className="print-pop-up-btns">
              <HomeBtn />
              <TypeFormBtn />
            </div>
          </Fragment>
        </Popup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    patient: state.patient
  };
}

export default connect(mapStateToProps)(PrintNSavePopUp);
