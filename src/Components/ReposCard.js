import {useState, useEffect} from 'react';
import Axios from "axios"
import {ListGroup, ListGroupItem} from "reactstrap";


const ReposCard = ({repos_url}) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url);
        setRepos(data);
    }

    useEffect(() => {
        fetchRepos();
    }, [repos_url])

    return (
        <ListGroup className={"mb-5 border border-info p-2"}>
            {
                repos.map(repo => (
                    <ListGroupItem>
                        <div className="text-primary"><a href={repo.html_url}> {repo.name}</a></div>
                        <div className="text-secondary">{repo.language}</div>
                        <div className="text-info">{repo.description}</div>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    );
};

export default ReposCard;