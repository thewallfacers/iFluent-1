import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="next-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="prev-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

class TeachersCarousel extends Component {
  static defaultProps = {
    teachers: [
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/english-UK-0b1dc079.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "English"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/spanish-32d567a0.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "Spanish"
      },
      {
        flag: "https://www.italki.com/static/media/france.4b6deacc.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/french-87f7b7cf.jpg",
        language: "French"
      },
      {
        flag: "https://www.italki.com/static/media/japan.60b87b49.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/japanese-99636b79.jpg",
        language: "Japanese"
      },
      {
        flag: "https://www.italki.com/static/media/china.1156edea.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/chinese-ba590708.jpg",
        language: "Chinese"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/german-8ce1eca6.jpg",
        flag: "https://www.italki.com/static/media/germany.ab4f232a.svg",
        language: "German"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/italian-c4abb062.jpg",
        flag: "https://www.italki.com/static/media/italy.62b3f764.svg",
        language: "Italian"
      },
      {
        flag: "https://www.italki.com/static/media/russia.ee120f11.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/russian-c6c8acfd.jpg",
        language: "Russian"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/portuguese-e159c420.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "Portuguese"
      },
      {
        flag: "https://www.italki.com/static/media/korea.75ac9327.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/korean-a0d01156.jpg",
        language: "Korean"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/arabic-5d7f2efc.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "Arabic"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/dutch-5e6ef5bd.jpg",
        flag: "https://www.italki.com/static/media/nederland.8c94355c.svg",
        language: "Dutch"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/turkish-3433d42b.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "Turkish"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/hebrew-faaf0b13.jpg",
        flag: "https://www.italki.com/static/media/israel.ab315ab1.svg",
        language: "Hebrew"
      },
      {
        flag: "https://www.italki.com/static/media/poland.ba65fa93.svg",
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/polish-faad616a.jpg",
        language: "Polish"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/hindi-5c1a2b79.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "Hindi"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/serbian-cae18b82.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "Serbian"
      },
      {
        img:
          "https://ifluent-dev.s3-us-west-1.amazonaws.com/teachers-slider/english-US-small-f573024c.jpg",
        flag: "https://www.italki.com/static/media/usa.4b11fcae.svg",
        language: "ASL"
      }
    ]
  };

  render() {
    const settings = {
      speed: 100,
      rows: 2,
      slidesPerRow: 3,
      dots: true,
      infinite: true,
      autoplay: true,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="teachers-carousel-container">
        <h1>
          10,000+ teachers.
          <span className="anylanguage"> Any language.</span>
        </h1>
        <Slider {...settings}>
          {this.props.teachers.map((teacher, idx) => (
            <div key={idx} className="teacher-item">
              <div className=".teacher-item-pic-container">
                <a href={`#/teachers/${teacher.language}`}>
                  <img
                    className="teacher-item-pic"
                    src={teacher.img}
                    alt={teacher}
                  />
                </a>
                <div className="teacher-detail">
                  <img
                    className="teacher-flag"
                    src={teacher.flag}
                    alt={teacher.language}
                  />
                  <h2 className="teacher-detail-title">{teacher.language}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="homepage-find-your-teacher">
          <a href="#/teachers/English">
            <div className="find-your-teacher">Find your teacher</div>
          </a>
        </div>
      </div>
    );
  }
}

export default TeachersCarousel;
