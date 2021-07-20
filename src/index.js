import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { TreeSelect } from "antd";

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: "无条件支持",
    value: "1",
    key: "1"
  },
  {
    title: "不支持",
    value: "2",
    key: "2"
  },
  {
    title: "指定条件下支持",
    value: "3",
    key: "3",
    checkable: false,
    children: [
      {
        title: "无理由",
        value: "3-1",
        key: "3-1",
        checkable: false,
        children: [
          {
            title: "7天无理由",
            value: "3-1-1",
            key: "3-1-1"
          },
          {
            title: "15天无理由",
            value: "3-1-2",
            key: "3-1-2"
          },
          {
            title: "30天无理由",
            value: "3-1-3",
            key: "3-1-3"
          }
        ]
      },

      {
        title: "质量问题",
        value: "3-2",
        key: "3-2",
        checkable: false,
        children: [
          {
            title: "15天质量问题",
            value: "3-2-1",
            key: "3-2-1"
          },
          {
            title: "30天质量问题",
            value: "3-2-2",
            key: "3-2-2"
          },
          {
            title: "180天质量问题",
            value: "3-2-3",
            key: "3-2-3"
          }
        ]
      },
      {
        title: "质保期内",
        value: "3-3",
        key: "3-3"
      }
    ]
  }
];

class Demo extends React.Component {
  state = {
    //    value: ["0-0-0"]
  };

  onChange = (value) => {
    console.log("onChange ", value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: "Please select",
      style: {
        width: "100%"
      },
      size: "small"
    };
    return <TreeSelect {...tProps} />;
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
