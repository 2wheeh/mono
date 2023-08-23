import { AtomicComponent, MolecularComponent } from '@mono/ui';

export default function Home() {
  return (
    <div>
      <div>
        <MolecularComponent color='primary' description='this is molecular' />
      </div>
      <p className='text-red-400'>test tailwind.config override</p>
      <p className='headline-1-semibold text-red-400'>test tailwind.config override</p>
      <div>
        <AtomicComponent color='secondary' />
      </div>
    </div>
  );
}
