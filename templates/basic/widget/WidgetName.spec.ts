import <%name%>ViewModel from './<%name%>/<%name%>ViewModel';

describe('app/<%name%>/<%name%>ViewModel', () => {
  let viewModel: <%name%>ViewModel;

  beforeEach(() => {
    viewModel = new <%name%>ViewModel();
  });

  test('name should be Slagathor', () => {
    expect(viewModel.name).toBe('Slagathor');
  });
});
