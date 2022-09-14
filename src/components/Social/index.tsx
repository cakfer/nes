import * as React from "react"

const sns = [
  {
    text: `Twitter`,
    icon: `twitter`,
    url: `https://twitter.com/bungferry__/`,
  },
  {
    text: `LinkedIn`,
    icon: `linkedin`,
    url: `https://linkedin.com/`,
  },
  {
    text: `Instagram`,
    icon: `instagram`,
    url: `https://Instagram.com/erossavanka`,
  },
  {
    text: `GitHub`,
    icon: `github`,
    url: `https://nesmain60250.gtsb.io/`,
  },
]

const Social = () => {
  return (
    <div className="social-buttons nes-balloon from-left">
      <p>Share it:</p>
      <ul className="share">
        {sns.map(link => (
          <li key={link.url}>
            <a href={link.url}>
              <i aria-hidden="true" className={`${link.icon} nes-icon`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Social
