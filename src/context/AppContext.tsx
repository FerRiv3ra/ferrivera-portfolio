import { axiosClient } from '@/config/axiosClient';
import { PortfolioResponse, Project, projectIdType } from '@/types/appTypes';
import { createContext, useContext, useEffect, useState } from 'react';

type AppContextProps = {
  filteredprojects: Project[];
  loading: boolean;
  category: projectIdType | 'ALL';
  getProject: (projectId: string) => Project;
  getRelatedProjects: (title: string) => Project[];
  filterProjects: (cat: 'ALL' | projectIdType) => void;
};

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: any) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredprojects, setFilteredProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState<'ALL' | projectIdType>('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const { data } = await axiosClient.get<PortfolioResponse>(
        '/653254a054105e766fc4bbbd',
        {
          headers: {
            'X-Access-Key':
              '$2a$10$zcagp9KCDv0MnsLo6gurd.xYfi1iz1bYTzTRpePJsXG2nqf4as8p2',
          },
        }
      );

      setProjects(data.record.projects);
      setFilteredProjects(data.record.projects);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getProject = (projectId: string) => {
    return projects.filter((project) => project.uid === projectId)[0];
  };

  const getRelatedProjects = (projectId: string) => {
    const title = getProject(projectId).name;

    const keyword = title.toLowerCase().startsWith('the')
      ? title.split(' ')[1]
      : title.split(' ')[0];

    const relatedProjects = title.startsWith('RN')
      ? [getProject(projectId)]
      : projects.filter((project) =>
          project.name.toLowerCase().includes(keyword.toLowerCase())
        );

    return relatedProjects;
  };

  const filterProjects = (cat: 'ALL' | projectIdType) => {
    setCategory(cat);
    if (cat === 'ALL') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === cat)
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        category,
        filteredprojects,
        filterProjects,
        getProject,
        getRelatedProjects,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a AppProvider');
  }

  return context;
};