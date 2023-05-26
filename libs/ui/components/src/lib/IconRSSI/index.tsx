import { getSomethingFromDomain } from '@repro-app/domain-something';

interface Props {
  color?: string;
}

export const IconRSSI = ({ color }: Props) => {
  const label = getSomethingFromDomain();
  return <div>it works {label}</div>;
};
