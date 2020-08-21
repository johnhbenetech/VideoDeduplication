import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { FingerprintType } from "../Fingerprints/type";
import ObjectGroupList from "./ObjectGroupList";
import { groupObjects } from "./groupObjects";
import ObjectGroupListItem from "./ObjectGroupListItem";

const useStyles = makeStyles((theme) => ({
  objectPane: {
    height: 572,
    overflow: "auto",
  },
}));

const second = 1000; // in millis

function ObjectsPanel(props) {
  const { file, onJump, className } = props;
  const classes = useStyles();
  const groups = groupObjects(file.objects, 10 * second);

  return (
    <div className={clsx(classes.objectPane, className)}>
      <ObjectGroupList>
        {groups.map((group) => (
          <ObjectGroupListItem
            objects={group}
            key={group[0].position}
            onJump={onJump}
          />
        ))}
      </ObjectGroupList>
    </div>
  );
}

ObjectsPanel.propTypes = {
  /**
   * Video file
   */
  file: FingerprintType.isRequired,
  /**
   * Jump to a particular object
   */
  onJump: PropTypes.func,
  className: PropTypes.string,
};

export default ObjectsPanel;
