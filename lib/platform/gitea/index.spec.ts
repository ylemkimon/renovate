  CommitFilesConfig,
  File,
  const mockRepoLabels: ght.Label[] = [
  const mockOrgLabels: ght.Label[] = [
    {
      id: 3,
      name: 'some-org-label',
      description: 'its a org me',
      color: '#0000aa',
    },
    {
      id: 4,
      name: 'other-org-label',
      description: 'org labelario',
      color: '#ffffaa',
    },
  ];

      helper.getRepoLabels.mockResolvedValueOnce(mockRepoLabels);
      helper.getOrgLabels.mockResolvedValueOnce(mockOrgLabels);

      const mockLabels = mockRepoLabels.concat(mockOrgLabels);
        labels: mockLabels.map((l) => l.name),
        labels: mockLabels.map((l) => l.id),
      const mockIssue = mockIssues.find((i) => i.title === 'open-issue');
      const mockIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const duplicates = mockIssues.filter(
        (i) => i.title === 'duplicate-issue'
      );
      const mockLabel = mockRepoLabels[0];
      helper.getRepoLabels.mockResolvedValueOnce(mockRepoLabels);
      helper.getOrgLabels.mockRejectedValueOnce(new Error());
      helper.getRepoLabels.mockResolvedValueOnce(mockRepoLabels);
      helper.getOrgLabels.mockResolvedValueOnce([]);