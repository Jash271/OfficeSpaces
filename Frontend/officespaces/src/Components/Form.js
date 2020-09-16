import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class componentName extends Component {
  state = {
    "title": "",
    "Description": "",
    "File": "",
  };

  notify(text, type) {
    switch (type) {
      case "info":
        toast.info(`👍${text}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        break;
      case "error":
        toast.error(`👎${text}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        break;
    }
  }

  ChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  FileHandler = (e) => {
    this.setState({
      "File": e.target.files[0],
    });
  };
  submitHandler = async () => {
    console.log(this.state);
    var myHeaders = new Headers();
    let token = localStorage.getItem("Token");
    myHeaders.append(
      "Authorization",
      `Token ${token}`,
    );
    var formdata = new FormData();
    formdata.append("Desc", this.state.Description);
    formdata.append("File", this.state.File);
    formdata.append("Title", this.state.title);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    let res = await fetch(
      "http://jash10.pythonanywhere.com/operations/AddAnnouncement",
      requestOptions,
    );
    let data = await res.json();
    console.log(data);
    if (data === "Ok") {
      this.notify("Added", "info");
      this.props.history.push("/announcement");
    }
  };

  render() {
    return (
      <div className="container">
        <div class="row">
          <h1>
            <span className="grey-text">Add </span>
            <span className="purple-text">
              Announcement
            </span>
          </h1>
          <form class="col s12 l9 m9">
            <div className="row">
              <div class="input-field col s6 m9 l9">
                <i class="material-icons prefix purple-text">title</i>
                <input
                  id="title"
                  type="text"
                  class="validate"
                  onChange={this.ChangeHandler}
                />
                <label for="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m9 l9">
                <i class="material-icons prefix purple-text">description</i>
                <input
                  id="Description"
                  type="text"
                  class="validate"
                  onChange={this.ChangeHandler}
                />
                <label for="Description">Description</label>
              </div>
              <div className="row">
                <div className="input-field col s6 m9 l9">
                  <i className="material-icons prefix purple-text">
                    attach_file
                  </i>
                  <div style={{ marginLeft: "40px" }}>
                    <span>
                      <h5 style={{ margingBottom: 10 }}>
                        <span className="grey-text">
                          Affix
                        </span>
                        <span className="purple-text"> a file</span>
                      </h5>
                    </span>
                  </div>
                  <input
                    id="File"
                    type="file"
                    class="validate"
                    onChange={this.FileHandler}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="right-align" style={{ marginRight: "500px" }}>
          <button
            class="btn waves-effect waves-light purple darken-2"
            type="submit"
            name="action"
            onClick={this.submitHandler}
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}
