import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <footer className="py-3 bg-info fixed-buttom ">
            <div className="container">
              <p className="m-0 text-center text-dark">
                Copyright &copy; Website 2021
              </p>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
