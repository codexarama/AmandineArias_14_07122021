import { useEffect } from 'react';

import { getTags } from '../../utils/handlers';
import { setAttributes } from '../../utils/handlers';

import Table from '../../components/Table';

/**
 * Employees
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Employees() {
  useEffect(() => {
    document.title = 'HRnet | Employees';

    // ACCESSIBILITY
    // HANDLING HEADERS SCOPE BY SETTING ATTRIBUTE
    // headers level 1
    getTags('tr', 0, 'th').map((item) =>
      setAttributes(item, {
        scope: "colgroup",
      })
    );
    // headers level 2
    getTags('tr', 1, 'th').map((item) =>
      setAttributes(item, {
        scope: "col",
      })
    );
  });

  return (
    <main aria-labelledby="page-title" className="table">
      <h2 tabIndex="0" id="page-title">
        Employees list
      </h2>
      <Table />
    </main>
  );
}
