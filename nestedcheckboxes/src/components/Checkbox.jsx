import React from "react";

const Checkbox = ({ data, checkbox, setCheckbox }) => {
  const hanldeChange = (e, node) => {
    const checked = e.target.checked;
    const { id, children } = node;

    setCheckbox((prev) => {
      let newState = { ...prev, [id]: checked };
      // for updating the child nodes
      const updateChildren = (children) => {
        children?.forEach((child) => {
          newState[child.id] = checked;
          child.children && updateChildren(child.children);
        });
      };

      // for updating the parent nodes
      // if all children checkboxes are checked mark the parent as checked
      // As of now updating parent checkbox is not my cup of tea. I'll get back to you once I mastered DSA.
      const verifyChecked = (children) => {
        const childNodes = children.every((child) => prev[child.id]);
        newState[children.id] = childNodes;
      };
      data.forEach((node) => {
        return verifyChecked(node);
      });

      verifyChecked(children);

      updateChildren(children);
      return newState;
    });
  };

  return (
    <div>
      <div className="checkbox-sec">
        {data.map((node) => {
          return (
            <div key={node.id}>
              <div className="parentnode">
                <input
                  type="checkbox"
                  checked={checkbox[node.id] || false}
                  onChange={(e) => hanldeChange(e, node)}
                />
                <span>{node?.name}</span>
                {node.children && (
                  <Checkbox
                    data={node.children}
                    checkbox={checkbox}
                    setCheckbox={setCheckbox}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
