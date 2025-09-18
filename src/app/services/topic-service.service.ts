import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Topic {
  topicId?: number;
  topicCode: string;
  topicName: string;
  category: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {
  private baseUrl = 'http://localhost:5070/api/Administrator';

  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/Topic/view`);
  }
  addTopic(topic: Topic): Observable<Topic> {
  return this.http.post<Topic>(`${this.baseUrl}/Topic/Add`, topic); 
}
updateTopic(id: number, topic: Topic): Observable<any> {
 return this.http.put<Topic>(`${this.baseUrl}/Topic/Modify?id=${id}`, topic);
}

}
