import { AtomicComponent, MolecularComponent } from '@mono/ui';

export default function Home() {
  return (
    <div>
      <div>
        <MolecularComponent color='primary' description='this is molecular' />
      </div>
      <div>
        <AtomicComponent color='secondary' />
      </div>
    </div>
  );
}
