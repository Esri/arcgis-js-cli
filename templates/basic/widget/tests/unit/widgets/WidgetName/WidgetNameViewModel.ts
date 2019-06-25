import <%name%>ViewModel from "../../../../src/widgets/<%name%>/<%name%>ViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/<%name%>/<%name%>ViewModel", () => {
  let vm: <%name%>ViewModel;

  beforeEach(() => {
    vm = new <%name%>ViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
