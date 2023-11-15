import React, {Component} from 'react'
import './styles.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Arshroop-Saini/climateresponsible"
            className="footer__responsibility-link"
          >
            Who is responsible for this data?
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://climatechronicle.in"
            className="footer__responsibility-link"
          >
            Learn More
          </a>

          <span className="footer__attribution">
            {'Developed & Designed with ♥  by '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="footer__attribution-link"
              href="https://arshroopsaini.in"
            >
              Arshroop S. Saini
            </a>
          </span>
        </div>
      </div>
    )
  }
}
