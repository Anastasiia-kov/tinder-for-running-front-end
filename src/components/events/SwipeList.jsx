import { set } from "date-fns/esm";
import React from "react";
import SwipeContainer from "./SwipeContainer";

class SwipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true,
      list: [
        { name: "nana", id: 1, slide: 1 },
        { name: "baba", id: 2, slide: 1 },
        { name: "gaga", id: 3, slide: 1 },
        { name: "dada", id: 4, slide: 1 },
      ],
      events: [],
    };
  }
  //   componentDidMount() {
  //     // console.log("this.props");
  //     // console.log(this.props);
  //     this.setState({ events: this.props.events });
  //   }

  //   Change(Index, info) {
  //     // console.log(e);
  //     const swipe = Index === 2 ? "Swiped left" : "Swiped right";
  //     // console.log(info);

  //     console.log(`you ${swipe} ${info.name}`);
  //     // this.setState({ slide: 1 });
  //     this.setState((prevState) => {
  //       return {
  //         list: [
  //           ...prevState.list.slice(0, info.index),
  //           ...prevState.list.slice(info.index + 1),
  //         ],
  //       };
  //     });
  //   }

  render() {
    // console.log("this.props");
    // console.log(this.props);
    // console.log(this.state.list);
    // console.log(this.state.condition);
    return (
      <div>
        {
          // !(this.props.events.length === 0) &&
          this.props.events.map((item, i) => {
            if (i === 0)
              return (
                <SwipeContainer
                  item={item}
                  key={item._id}
                  //   slide={item.slide}
                  //   name={item.title}
                  //   id={item.id}
                  //   index={1}
                  Change={(e, info) => this.props.Change(e, info)}
                />
              );
            // else return null;
          })
        }
      </div>
    );
  }
}

export default SwipeList;
