import * as React from 'react'
import { container, bodyText, sticky } from './article.module.scss'

// eslint-disable-next-line react/prop-types
export const Article = ({ frontmatter, prev, next, children }) => {
  if (!frontmatter) return null

  return (
        <div className={container}>
            <div className={sticky}>
                <hr/>

                <p>
                    a, elit eu tempor sodales, ligula dolor dignissim sem, id tempor ipsum tellus ac neque. Nulla auctor, dui ut dignissim consectetur, lectus lacus luctus urna, vitae aliquam erat diam eu purus. Curabitur in ligula lorem. Phasellus eget semper tortor. Cras interdum elit at blandit commodo. Aliquam ipsum libero, rutrum non condimentum
                </p>
            </div>
            <div className={bodyText}>
                <hr/>
                <br/>
                <br/>
                <h6>
                    September 1st, 1997
                </h6>
                <h1>
                    My Article Title
                </h1>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum risus mauris, semper tincidunt leo tincidunt, lobortis dictum est. Sed imperdiet blandit metus porttitor dapibus. Fusce in purus a arcu ultricies feugiat. Phasellus malesuada eros eleifend nulla tempus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel mattis ex. Vivamus id urna nec sapien maximus porttitor. Donec bibendum eu tortor sed feugiat. Phasellus venenatis sollicitudin ipsum in dignissim. Vestibulum sed pretium ex.
                </p>
                <p>
                    Morbi eu bibendum justo. Aliquam erat volutpat. Fusce pretium tempus lacus in posuere. Aenean fringilla, elit eu tempor sodales, ligula dolor dignissim sem, id tempor ipsum tellus ac neque. Nulla auctor, dui ut dignissim consectetur, lectus lacus luctus urna, vitae aliquam erat diam eu purus. Curabitur in ligula lorem. Phasellus eget semper tortor. Cras interdum elit at blandit commodo. Aliquam ipsum libero, rutrum non condimentum eu, tempor non ligula. Maecenas aliquam tincidunt quam. Pellentesque eu dolor dignissim, pharetra nisi eget, dapibus dolor. Curabitur in dui vel tellus interdum porttitor. Nulla tempus sem faucibus nunc tempor ultricies. Aliquam erat volutpat. Vestibulum quis sapien tristique, congue dolor consequat, condimentum eros. Aliquam bibendum gravida turpis, sed lacinia arcu sagittis non.
                </p>
                <p>
                    Fusce viverra eleifend hendrerit. Cras tincidunt, arcu quis hendrerit commodo, tellus nibh interdum quam, at feugiat ex leo eu lorem. Pellentesque facilisis ex elit, nec lacinia enim molestie sed. Pellentesque iaculis dui tortor, vel iaculis odio egestas id. Fusce est risus, lobortis at lectus non, efficitur feugiat ligula. In hac habitasse platea dictumst. Aliquam volutpat pellentesque est, et accumsan neque feugiat eu. Ut quis ligula eu nibh facilisis maximus. Integer nisl dui, faucibus sed est et, tempus finibus velit. Fusce vel finibus nulla. Proin non interdum nulla, quis tempor massa. Mauris viverra vehicula nulla et suscipit. Donec eget hendrerit odio. Nulla convallis, erat vel aliquam imperdiet, leo lectus maximus lacus, eget pharetra elit tellus nec nisla.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum orci nec elementum fermentum. Fusce varius diam felis, sed mattis arcu viverra a. Donec ut arcu eu quam placerat pharetra. In justo libero, dignissim in odio ut, posuere sollicitudin ligula. Curabitur ultricies libero eu rutrum auctor. In elit mauris, dignissim id porta eget, congue vel purus. Nunc accumsan, sapien sit amet maximus elementum, nulla orci commodo turpis, nec tristique risus ante vel odio. Aenean mollis mi in lorem sodales condimentum. Mauris placerat odio nibh, ut semper eros sodales non. Aliquam id ligula rhoncus massa pulvinar suscipit. Vestibulum sapien magna, lobortis quis orci sit amet, mattis tristique quam. Morbi semper, lectus quis venenatis consectetur, ipsum arcu gravida metus, eu molestie lorem orci vitae metus. In id lacus aliquet, iaculis nisi vel, vehicula leo. Pellentesque sollicitudin orci nisi, eget finibus risus dapibus sed. Morbi vel felis lorem. Praesent auctor purus quis nisl luctus feugiat.
                </p>                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum risus mauris, semper tincidunt leo tincidunt, lobortis dictum est. Sed imperdiet blandit metus porttitor dapibus. Fusce in purus a arcu ultricies feugiat. Phasellus malesuada eros eleifend nulla tempus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel mattis ex. Vivamus id urna nec sapien maximus porttitor. Donec bibendum eu tortor sed feugiat. Phasellus venenatis sollicitudin ipsum in dignissim. Vestibulum sed pretium ex.
                </p>
                <p>
                    Morbi eu bibendum justo. Aliquam erat volutpat. Fusce pretium tempus lacus in posuere. Aenean fringilla, elit eu tempor sodales, ligula dolor dignissim sem, id tempor ipsum tellus ac neque. Nulla auctor, dui ut dignissim consectetur, lectus lacus luctus urna, vitae aliquam erat diam eu purus. Curabitur in ligula lorem. Phasellus eget semper tortor. Cras interdum elit at blandit commodo. Aliquam ipsum libero, rutrum non condimentum eu, tempor non ligula. Maecenas aliquam tincidunt quam. Pellentesque eu dolor dignissim, pharetra nisi eget, dapibus dolor. Curabitur in dui vel tellus interdum porttitor. Nulla tempus sem faucibus nunc tempor ultricies. Aliquam erat volutpat. Vestibulum quis sapien tristique, congue dolor consequat, condimentum eros. Aliquam bibendum gravida turpis, sed lacinia arcu sagittis non.
                </p>
                <p>
                    Fusce viverra eleifend hendrerit. Cras tincidunt, arcu quis hendrerit commodo, tellus nibh interdum quam, at feugiat ex leo eu lorem. Pellentesque facilisis ex elit, nec lacinia enim molestie sed. Pellentesque iaculis dui tortor, vel iaculis odio egestas id. Fusce est risus, lobortis at lectus non, efficitur feugiat ligula. In hac habitasse platea dictumst. Aliquam volutpat pellentesque est, et accumsan neque feugiat eu. Ut quis ligula eu nibh facilisis maximus. Integer nisl dui, faucibus sed est et, tempus finibus velit. Fusce vel finibus nulla. Proin non interdum nulla, quis tempor massa. Mauris viverra vehicula nulla et suscipit. Donec eget hendrerit odio. Nulla convallis, erat vel aliquam imperdiet, leo lectus maximus lacus, eget pharetra elit tellus nec nisla.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum orci nec elementum fermentum. Fusce varius diam felis, sed mattis arcu viverra a. Donec ut arcu eu quam placerat pharetra. In justo libero, dignissim in odio ut, posuere sollicitudin ligula. Curabitur ultricies libero eu rutrum auctor. In elit mauris, dignissim id porta eget, congue vel purus. Nunc accumsan, sapien sit amet maximus elementum, nulla orci commodo turpis, nec tristique risus ante vel odio. Aenean mollis mi in lorem sodales condimentum. Mauris placerat odio nibh, ut semper eros sodales non. Aliquam id ligula rhoncus massa pulvinar suscipit. Vestibulum sapien magna, lobortis quis orci sit amet, mattis tristique quam. Morbi semper, lectus quis venenatis consectetur, ipsum arcu gravida metus, eu molestie lorem orci vitae metus. In id lacus aliquet, iaculis nisi vel, vehicula leo. Pellentesque sollicitudin orci nisi, eget finibus risus dapibus sed. Morbi vel felis lorem. Praesent auctor purus quis nisl luctus feugiat.
                </p>
            </div>
            <div className={sticky}>
                <hr/>
                <h6>related articles</h6>
                <hr/>
                <h5>Sharty Artcile</h5>
                <hr/>
                <h5>How to Hack the Mainframe</h5>
                <hr/>
                <h5>Roll Your Own Readwise</h5>
                <hr/>
            </div>
        </div>
  )
}
