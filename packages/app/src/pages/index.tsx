import { AtomicComponent, MolecularComponent } from '@mymono/ui';
import { useMemo } from 'react';
import { getSiteInfo, testStr } from '@mymono/utils';

export default function Home() {
  const site = useMemo(() => getSiteInfo(), []);

  return (
    <div>
      <div>
        <MolecularComponent color='primary' description='this is molecular' />
      </div>
      <p className='text-red-400'>test tailwind.config override</p>
      <p className='headline-1-semibold text-red-400'>test tailwind.config override</p>
      <p>{site.title}</p>
      <p>{testStr}</p>
      <div>
        <AtomicComponent color='secondary' />
      </div>
    </div>
  );
}
