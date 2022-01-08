import { useEffect } from 'react';

import { getTags } from '../../utils/handlers';
import { getNestedTags } from '../../utils/handlers';
import { setAttributes } from '../../utils/handlers';

import EditTable from '../../components/Table';

/**
 * Employees List with many sorting options
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Employees() {
  useEffect(() => {
    document.title = 'HRnet | Employees';

    // ACCESSIBILITY
    // HANDLING ROWS GROUP BY SETTING ATTRIBUTE
    console.log(getTags('tr'));
    getTags('tbody').map((item) => item.removeAttribute('role'));

    // HANDLING HEADERS SCOPE BY SETTING ATTRIBUTE
    // headers level 1
    getNestedTags('tr', 0, 'th').map((item) =>
      setAttributes(item, {
        scope: 'colgroup',
      })
    );
    // headers level 2
    getNestedTags('tr', 1, 'th').map((item) =>
      setAttributes(item, {
        scope: 'col',
      })
    );
  });

  return (
    <main aria-labelledby="page-title" className="table">
      <h2 tabIndex="0" id="page-title">
        Employees list
      </h2>
      <EditTable />
    </main>
  );
}
