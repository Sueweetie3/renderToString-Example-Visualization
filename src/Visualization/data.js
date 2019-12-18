export const treeData = {
  id: "root",
  type: "f Example()",
  props: {},
  children: [
    {
      id: 1,
      type: "div",
      props: {
        className: "main",
        children: "Array<React.Element>(4)"
      },
      children: [
        {
          id: 5,
          type: "ƒ SelectedResult({ selectItems })",
          props: {
            selectItems: []
          },
          children: [
            {
              id: 9,
              type: "Symbol(react.fragment)",
              props: {
                children: []
              }
            }
          ]
        },
        {
          id: 4,
          content: "You have selected o(*≧▽≦)ツ:"
        },
        {
          id: 3,
          type: "class ItemList",
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "f: item => {...}"
          },
          children: [
            {
              id: 8,
              type: "div",
              props: {
                className: "product-list",
                children: "React.Element"
              },
              children: [
                {
                  id: 11,
                  type: "ul",
                  props: {
                    children: "Array<React.Element>(3)"
                  },
                  children: [
                    {
                      id: 14,
                      type:
                        "ƒ ItemView({ item, selectItems, handleSelectItem, showIcon })",
                      props: {
                        item: "apple",
                        selectItems: [],
                        showIcon: true,
                        handleSelectItem: "f: item => {...}"
                      }
                    },
                    {
                      id: 13,
                      type:
                        "ƒ ItemView({ item, selectItems, handleSelectItem, showIcon })",
                      props: {
                        item: "apple",
                        selectItems: [],
                        showIcon: true,
                        handleSelectItem: "f: item => {...}"
                      }
                    },
                    {
                      id: 12,
                      type:
                        "ƒ ItemView({ item, selectItems, handleSelectItem, showIcon })",
                      props: {
                        item: "apple",
                        selectItems: [],
                        showIcon: true,
                        handleSelectItem: "f: item => {...}"
                      },
                      children: [
                        {
                          id: 15,
                          type: "li",
                          props: {
                            children: "Array<React.Element>(3)"
                          },
                          children: [
                            {
                              id: 18,
                              content: "apple"
                            },
                            {
                              id: 17,
                              type: "img",
                              props: {
                                alt: "apple",
                                src: "./apple.png",
                                style: {
                                  width: "16px",
                                  height: "16px",
                                  marginLeft: "6px",
                                  marginRight: "12px"
                                }
                              }
                            },
                            {
                              id: 16,
                              type: "input",
                              props: {
                                type: "checkbox",
                                value: "apple",
                                checked: false,
                                onChange: "()=>{...}"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          type: "h2",
          props: {
            className: "title",
            children: "Array<React.Element>(2)"
          },
          children: [
            {
              id: 7,
              content: "Product List:"
            },
            {
              id: 6,
              type: "svg",
              props: {
                className: "logo",
                viewBox: "0 0 48 48",
                children: "Array<React.Element>(1)"
              },
              children: [
                {
                  id: 10,
                  type: "path",
                  props: {
                    d: "M44.4, 11.5C44.4, 11.5...",
                    children: []
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const frameData = [
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: "topFrame"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 0,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "h2",
      children: [
        {
          type: "svg",
          key: ".0",
          ref: null,
          props: {
            className: "logo",
            viewBox: "0 0 48 48",
            children: {
              type: "path",
              key: null,
              ref: null,
              props: {
                d:
                  "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        "Product List:"
      ],
      childIndex: 0,
      footer: "</h2>",
      width: 10,
      frameId: " 2"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "h2",
      children: [
        {
          type: "svg",
          key: ".0",
          ref: null,
          props: {
            className: "logo",
            viewBox: "0 0 48 48",
            children: {
              type: "path",
              key: null,
              ref: null,
              props: {
                d:
                  "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        "Product List:"
      ],
      childIndex: 1,
      footer: "</h2>",
      width: 10,
      frameId: " 2"
    },
    {
      domNamespace: "http://www.w3.org/2000/svg",
      type: "svg",
      children: [
        {
          type: "path",
          key: ".0",
          ref: null,
          props: {
            d:
              "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 0,
      footer: "</svg>",
      width: 10,
      frameId: " 3"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "h2",
      children: [
        {
          type: "svg",
          key: ".0",
          ref: null,
          props: {
            className: "logo",
            viewBox: "0 0 48 48",
            children: {
              type: "path",
              key: null,
              ref: null,
              props: {
                d:
                  "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        "Product List:"
      ],
      childIndex: 1,
      footer: "</h2>",
      width: 10,
      frameId: " 2"
    },
    {
      domNamespace: "http://www.w3.org/2000/svg",
      type: "svg",
      children: [
        {
          type: "path",
          key: ".0",
          ref: null,
          props: {
            d:
              "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</svg>",
      width: 10,
      frameId: " 3"
    },
    {
      domNamespace: "http://www.w3.org/2000/svg",
      type: "path",
      children: [],
      childIndex: 0,
      footer: "</path>",
      width: 10,
      frameId: " 4"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "h2",
      children: [
        {
          type: "svg",
          key: ".0",
          ref: null,
          props: {
            className: "logo",
            viewBox: "0 0 48 48",
            children: {
              type: "path",
              key: null,
              ref: null,
              props: {
                d:
                  "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        "Product List:"
      ],
      childIndex: 1,
      footer: "</h2>",
      width: 10,
      frameId: " 2"
    },
    {
      domNamespace: "http://www.w3.org/2000/svg",
      type: "svg",
      children: [
        {
          type: "path",
          key: ".0",
          ref: null,
          props: {
            d:
              "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</svg>",
      width: 10,
      frameId: " 3"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "h2",
      children: [
        {
          type: "svg",
          key: ".0",
          ref: null,
          props: {
            className: "logo",
            viewBox: "0 0 48 48",
            children: {
              type: "path",
              key: null,
              ref: null,
              props: {
                d:
                  "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        "Product List:"
      ],
      childIndex: 1,
      footer: "</h2>",
      width: 10,
      frameId: " 2"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "h2",
      children: [
        {
          type: "svg",
          key: ".0",
          ref: null,
          props: {
            className: "logo",
            viewBox: "0 0 48 48",
            children: {
              type: "path",
              key: null,
              ref: null,
              props: {
                d:
                  "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        "Product List:"
      ],
      childIndex: 1,
      footer: "</h2>",
      width: 10,
      frameId: " 2"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "h2",
      children: [
        {
          type: "svg",
          key: ".0",
          ref: null,
          props: {
            className: "logo",
            viewBox: "0 0 48 48",
            children: {
              type: "path",
              key: null,
              ref: null,
              props: {
                d:
                  "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        "Product List:"
      ],
      childIndex: 2,
      footer: "</h2>",
      width: 10,
      frameId: " 2"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 0,
      footer: "</div>",
      width: 10,
      frameId: "5"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 0,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "apple",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./apple.png",
            alt: "apple",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "apple"
      ],
      childIndex: 0,
      footer: "</li>",
      width: 10,
      frameId: " 7"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "apple",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./apple.png",
            alt: "apple",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "apple"
      ],
      childIndex: 1,
      footer: "</li>",
      width: 10,
      frameId: " 7"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "input",
      children: [],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: " 8"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "apple",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./apple.png",
            alt: "apple",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "apple"
      ],
      childIndex: 1,
      footer: "</li>",
      width: 10,
      frameId: " 7"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "apple",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./apple.png",
            alt: "apple",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "apple"
      ],
      childIndex: 2,
      footer: "</li>",
      width: 10,
      frameId: " 7"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "img",
      children: [],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: " 9"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "apple",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./apple.png",
            alt: "apple",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "apple"
      ],
      childIndex: 2,
      footer: "</li>",
      width: 10,
      frameId: " 7"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "apple",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./apple.png",
            alt: "apple",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "apple"
      ],
      childIndex: 2,
      footer: "</li>",
      width: 10,
      frameId: " 7"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "apple",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./apple.png",
            alt: "apple",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "apple"
      ],
      childIndex: 3,
      footer: "</li>",
      width: 10,
      frameId: " 7"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "banana",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./banana.png",
            alt: "banana",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "banana"
      ],
      childIndex: 0,
      footer: "</li>",
      width: 10,
      frameId: " 10"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "banana",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./banana.png",
            alt: "banana",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "banana"
      ],
      childIndex: 1,
      footer: "</li>",
      width: 10,
      frameId: " 10"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "input",
      children: [],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: " 11"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "banana",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./banana.png",
            alt: "banana",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "banana"
      ],
      childIndex: 1,
      footer: "</li>",
      width: 10,
      frameId: " 10"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "banana",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./banana.png",
            alt: "banana",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "banana"
      ],
      childIndex: 2,
      footer: "</li>",
      width: 10,
      frameId: " 10"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "img",
      children: [],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: " 12"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "banana",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./banana.png",
            alt: "banana",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "banana"
      ],
      childIndex: 2,
      footer: "</li>",
      width: 10,
      frameId: " 10"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "banana",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./banana.png",
            alt: "banana",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "banana"
      ],
      childIndex: 3,
      footer: "</li>",
      width: 10,
      frameId: " 10"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "carrot",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./carrot.png",
            alt: "carrot",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "carrot"
      ],
      childIndex: 0,
      footer: "</li>",
      width: 10,
      frameId: " 13"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "carrot",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./carrot.png",
            alt: "carrot",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "carrot"
      ],
      childIndex: 1,
      footer: "</li>",
      width: 10,
      frameId: " 13"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "input",
      children: [],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: " 14"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "carrot",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./carrot.png",
            alt: "carrot",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "carrot"
      ],
      childIndex: 1,
      footer: "</li>",
      width: 10,
      frameId: " 13"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "carrot",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./carrot.png",
            alt: "carrot",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "carrot"
      ],
      childIndex: 2,
      footer: "</li>",
      width: 10,
      frameId: " 13"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "img",
      children: [],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: " 15"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "carrot",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./carrot.png",
            alt: "carrot",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "carrot"
      ],
      childIndex: 2,
      footer: "</li>",
      width: 10,
      frameId: " 13"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "li",
      children: [
        {
          type: "input",
          key: ".0",
          ref: null,
          props: {
            type: "checkbox",
            value: "carrot",
            onChange: "()",
            checked: false
          },
          _owner: null,
          _store: {}
        },
        {
          type: "img",
          key: ".1",
          ref: null,
          props: {
            src: "./carrot.png",
            alt: "carrot",
            style: {
              width: "16px",
              height: "16px",
              marginLeft: "6px",
              marginRight: "12px"
            }
          },
          _owner: null,
          _store: {}
        },
        "carrot"
      ],
      childIndex: 3,
      footer: "</li>",
      width: 10,
      frameId: " 13"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "ul",
      children: [
        {
          type: "function ItemView()",
          key: ".$0",
          ref: null,
          props: {
            item: "apple",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$1",
          ref: null,
          props: {
            item: "banana",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        },
        {
          type: "function ItemView()",
          key: ".$2",
          ref: null,
          props: {
            item: "carrot",
            selectItems: [],
            handleSelectItem: "function handleSelectItem()",
            showIcon: true
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</ul>",
      width: 10,
      frameId: " 6"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "ul",
          key: ".0",
          ref: null,
          props: {
            children: [
              {
                type: "function ItemView()",
                key: "0",
                ref: null,
                props: {
                  item: "apple",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "1",
                ref: null,
                props: {
                  item: "banana",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              },
              {
                type: "function ItemView()",
                key: "2",
                ref: null,
                props: {
                  item: "carrot",
                  selectItems: [],
                  handleSelectItem: "function handleSelectItem()",
                  showIcon: true
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "</div>",
      width: 10,
      frameId: " 5"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 2,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 3,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 4,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    },
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [],
      childIndex: 0,
      footer: "",
      width: 10,
      frameId: " 16"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    },
    {
      domNamespace: "http://www.w3.org/1999/xhtml",
      type: "div",
      children: [
        {
          type: "h2",
          key: ".0",
          ref: null,
          props: {
            className: "title",
            children: [
              {
                type: "svg",
                key: null,
                ref: null,
                props: {
                  className: "logo",
                  viewBox: "0 0 48 48",
                  children: {
                    type: "path",
                    key: null,
                    ref: null,
                    props: {
                      d:
                        "M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0 c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4 c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0 C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8 c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5 c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5 c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1 c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8 c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z"
                    },
                    _owner: null,
                    _store: {}
                  }
                },
                _owner: null,
                _store: {}
              },
              "Product List:"
            ]
          },
          _owner: null,
          _store: {}
        },
        {
          type: "class ItemList",
          key: ".1",
          ref: null,
          props: {
            items: ["apple", "banana", "carrot"],
            selectItems: [],
            handleSelectItem: "function handleSelectItem()"
          },
          _owner: null,
          _store: {}
        },
        "You have selected o(*≧▽≦)ツ:",
        {
          type: "function ItemView()",
          key: ".3",
          ref: null,
          props: { selectItems: [] },
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 4,
      footer: "</div>",
      width: 10,
      frameId: " 1"
    }
  ],
  [
    {
      type: null,
      domNamespace: "http://www.w3.org/1999/xhtml",
      children: [
        {
          type: "function Example()",
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {}
        }
      ],
      childIndex: 1,
      footer: "",
      width: 10,
      frameId: "topFrame"
    }
  ]
];

/*</h2><div class="product-list"><ul><li>carrot</ul></div>You have selected o(*≧▽≦)ツ:</div>
 */
export const outputData = {
  0: '<div class="main">',
  1: '<h2 class="title">',
  2: '<svg class="logo" viewBox="0 0 48 48">',
  3: '<path d="M44.4,11.5C44.4,11.5z">',
  4: "",
  5: "</path>",
  6: "</svg>",
  7: "Product List:",
  8: "",
  9: "</h2>",
  10: '<div class="product-list">',
  11: "<ul>",
  12: "<li>",
  13: '<input type="checkbox" value="apple"/>',
  14: "",
  15: '<img src="./apple.png" alt="apple" style="width:16px;height:16px;margin-left:6px;margin-right:12px"/>',
  16: "",
  17: "apple",
  18: "",
  19: "</li>",
  20: ""
};
