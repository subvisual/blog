import React, { PropTypes } from 'react';
import PostPage from 'components/post_page';

import stylesheet from '!raw!postcss!sass!./139-wip.scss';
import Authors from 'data/authors.yaml';

import FormattedDate from 'components/formatted_date';

const PostData = {
  // must be unique among all posts
  id: 139,

  // this won't actually be used by Gatsby, but is needed by Disqus to correctly
  // link the comments widget to the post
  // So it's important that it matches what gatsby will generate for this post
  // (see gatsby-node.js, rewritePath function)
  // The pattern is always: "/posts/<ID>-<NAME>"
  // This should also match the name of the file itself
  path: '/posts/139-wip',

  // Self explanatory
  title: 'Building an animated mirroring effect\nin React',

  // Your blog name, in downcase, no accents, and with spaces rather than spaces.
  // i.e.: joao-ferreira, luis-zamith
  // check data/authors.yaml if you have doubts
  author: 'miguel-palhas',

  // an array of tags to index your post
  // main tags are:
  //   - general,
  //   - development,
  //   - design,
  //   - community
  //
  // other than this, you can add your own custom tags if needed
  // (at most 2 per post, preferencially)
  tags: ['development'],

  // publication date
  // always in the format DD/MM/YYYY
  date: '06/06/2017',
};

const lerp = (value1, value2, amount) => value1 + ((value2 - value1) * amount);

class Mirror extends React.Component {
  constructor(props) {
    super(props);
    this.r = {};
  }

  componentDidMount() {
    document.
      body.
      addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = _.throttle((event) => {
    const xRatio = event.clientX / window.innerWidth;
    const yRatio = event.clientY / window.innerHeight;

    const xRotation = lerp(0, 20, xRatio);
    const yRotation = lerp(-10, 0, yRatio);

    this.r.reflection.style.setProperty('--rotation-y', `${xRotation}deg`);
    this.r.reflection.style.setProperty('--rotation-x', `${yRotation}deg`);
  }, 50)

  render() {
    return <div className="Mirror">
      <div className="Mirror-original">
        {this.props.children}
      </div>
      <div className="Mirror-reflection" ref={ref => { this.r.reflection = ref; }}>
        {this.props.children}
      </div>
    </div>;
  }
}

Mirror.propTypes = {
  children: PropTypes.node.isRequired,
};

const author = Authors[PostData.author];

class PostBody extends React.Component {
  renderStyle() {
    return <style dangerouslySetInnerHTML={{ __html: stylesheet }} />;
  }

  renderHero() {
    return <div className="PostHero">
      <div className="u-navPlaceholder" />

      <div className="PostHero-content">
        <Mirror>
          <h1 className="PostHeading PostHeading--large">
            {PostData.title}
          </h1>
        </Mirror>

        <div className="u-smallThenDefaultMargin" />

        <Mirror>
          <div className="PostInfo">
            <div className="PostInfo-author">
              by&nbsp;
              <span className="PostInfo-authorName">{author.name}</span>
            </div>
            <div className="PostInfo-date">
              on&nbsp;
              <FormattedDate date={PostData.date} />
            </div>
          </div>
        </Mirror>
      </div>
    </div>;
  }

  render() {
    return <PostPage
      lightNav
      hero={this.renderHero()}
      className="Post139"
      postData={PostData}
    >
      {this.renderStyle()}

      <div className="PostWidthConstrainer">

        <p>This should be mirrored</p>
      </div>
    </PostPage>;
  }
}

export default PostBody;
