/** @jsx jsx */
import { AllWidgetProps, BaseWidget, jsx } from "jimu-core";
import { IMConfig } from "../config";

// import { TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'jimu-ui';
import defaultMessages from "./translations/default";

export default class <%name%> extends BaseWidget<AllWidgetProps<IMConfig>, any> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="widget-demo jimu-widget" style={{ overflow: "auto" }}>
        <p>Hello world!</p>
        <p>Widget Name: {defaultMessages._widgetLabel}</p>
        <p>Config value: {this.props.config.exampleConfigProperty}</p>
      </div>
    );
  }
}
