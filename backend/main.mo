import Func "mo:base/Func";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  // Define the Participant type
  public type Participant = {
    name: Text;
    surname: Text;
  };

  // Store participants in a stable variable
  stable var participants : [Participant] = [];

  // Function to add a new participant
  public func addParticipant(name: Text, surname: Text) : async () {
    let newParticipant : Participant = {
      name = name;
      surname = surname;
    };
    participants := Array.append<Participant>(participants, [newParticipant]);
  };

  // Function to get all participants
  public query func getParticipants() : async [Participant] {
    participants
  };
}
