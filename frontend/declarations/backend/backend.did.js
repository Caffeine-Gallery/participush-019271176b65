export const idlFactory = ({ IDL }) => {
  const Participant = IDL.Record({ 'name' : IDL.Text, 'surname' : IDL.Text });
  return IDL.Service({
    'addParticipant' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'getParticipants' : IDL.Func([], [IDL.Vec(Participant)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
