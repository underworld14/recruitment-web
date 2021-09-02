import i18n from "app/i18n";
import { isEmpty } from "lodash";
import moment from "moment";

// let moment = require("moment");
// require("moment/min/locales.min");

//Not Work (Must be ReRender in ClassComponent)
if (!isEmpty(i18n.language)) {
  moment.locale(i18n.language);
} else {
  moment.locale();
}
export default moment;
