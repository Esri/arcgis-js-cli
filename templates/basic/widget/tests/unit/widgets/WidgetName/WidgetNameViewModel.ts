import <%name%>ViewModel from "../../../../../src/app/widgets/<%name%>/<%name%>ViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("app/widgets/<%name%>/<%name%>ViewModel", () => {
  let vm: <%name%>ViewModel;

  beforeEach(() => {
    vm = new <%name%>ViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
