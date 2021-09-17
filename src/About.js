import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
            <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">About</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
